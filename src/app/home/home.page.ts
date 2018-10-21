import { Component } from '@angular/core'
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public gyroscope: Gyroscope, public toastController: ToastController) { }

options: GyroscopeOptions = {
    frequency: 1000
 }

 /*
 this.gyroscope.getCurrent(options)
   .then((orientation: GyroscopeOrientation) => {
      console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
    })
   .catch()


 this.gyroscope.watch()
    .subscribe((orientation: GyroscopeOrientation) => {
       console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
    });

    */
}
