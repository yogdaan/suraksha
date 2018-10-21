import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { HttpService} from "../../service/http.service";
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-environmental',
  templateUrl: './environmental.page.html',
  styleUrls: ['./environmental.page.scss'],
})
export class EnvironmentalPage {

  /*********************
    * Variables
    **********************/


    // Default Values
    openWeatherMapKey: string = "b48d71c76bc12ce4415b45cbb858195f";
    breezoMeterKey: string = "dd9252839e964d6b9f0101bca1c59fc7";

    lat: number;
    lon: number;

    // Date
    airData: object;
    uvData: object;
    weatherData: object;

    // API Links
    airApi: string = "https://api.breezometer.com/baqi/";
    uvApi: string = "http://api.openweathermap.org/data/2.5/uvi";
    weatherApi: string = "http://api.openweathermap.org/data/2.5/weather";

    // Parameters
    airPara:object;
    uvPara:object;
    weatherPara:object;

    // Header object for login api
    header:object =  {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST',
        'Access-Control-Allow-Headers': 'Content-Type'
    }
    weatherHeader:object =  {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST',
        'Access-Control-Allow-Headers': 'Content-Type'
    }

     /*********************
    * Functions
    **********************/

    /*
    *    To Check credentials to uv
    *    This function should start after setDAta
    *
    */
   getAir(): Observable<any>{
    return this.HttpService.fetch(this.airApi, this.header, this.airPara, "UV");
}

getUv(): Observable<any>{
    return this.HttpService.fetch(this.uvApi, this.header, this.uvPara, "UV");
}

getWeather(): Observable<any>{
    return this.HttpService.fetch(this.weatherApi, this.header, this.weatherPara, "UV");
}

constructor(private androidPermissions: AndroidPermissions,
  private HttpService: HttpService,
  private geolocation: Geolocation) {

// To get the required permissions
this.androidPermissions.requestPermissions([
  this.androidPermissions.PERMISSION.CAMERA,
  this.androidPermissions.PERMISSION.GET_ACCOUNTS,
  this.androidPermissions.PERMISSION.INTERNET,
  this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
  this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
  this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION,
  this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION,
  this.androidPermissions.PERMISSION.CAMERA

  ]).then(() => {
    console.log("getting Geo Location");
    this.geolocation.getCurrentPosition().then((resp) => {
   this.lat = resp.coords.latitude;
   this.lon = resp.coords.longitude;
   console.log("lat: " +   resp.coords.latitude)
   console.log("log: " +   resp.coords.longitude)

   this.fetch();

  }).catch((error) => {
      console.log('Error getting location', error);
  });
  });
}

fetch(): void{

  // Parameters
 this.airPara = {
   "key": "2d2a717abed743c982bf247bb59be090",
   "lat": this.lat,
   "lon": this.lon,
 }

 this.uvPara = {
   "appid": "2ffcf64c74128a6644f33e554d86766c",
   "lat": this.lat,
   "lon": this.lon,
 }

 this.weatherPara = {
   "appid": "2ffcf64c74128a6644f33e554d86766c",
   "lat": this.lat,
   "lon": this.lon,
 }

 console.log("Fetching start");

 // To get the UV Data
 // This is to make a http call to fetch user information
 this.getAir().subscribe(
     data => {
       this.airData = data;
       console.log(data);
     },
     error => alert("error")
   );

 this.getUv().subscribe(
     data => {
       this.uvData = data;
       console.log(data);
     },
     error => alert("error")
   );

 this.getWeather().subscribe(
     data => {
       this.weatherData = data;
       console.log(data);
     },
     error => alert("error")
   );

}
}
