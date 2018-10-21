/*******************************
*  This service is to make http calls
*  for the complete app
*
*  Date of Creation: 01-08-2018
*  Creator: Raman Tehlan
*******************************/

// Core File
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {Jsonp} from '@angular/http';
import 'rxjs';


//
// To perform http calls
//
@Injectable()
export class HttpService {

    // This is to store http parameters and options
    httpOptions: any;

    /*
    *  This is to fetch data from requested api
    *
    *  url: api address
    *  headerObject: User defined headers object
    *  paramObject: User defined parameters object
    */
    fetch(url:string , headerObject: any, paramObject : any, operationName = "Unknown") : Observable<any>{

      // This is object of httpOptions
      // It can be used to send header and other parameters
      this.httpOptions = {
          headers: new HttpHeaders(headerObject)
      }

      // This is to add parameters in url
      // Note: This can be improved by adding it to httpOptions
      url = this.AppendUrl(url, paramObject);
      console.log(url);
      console.log(headerObject);

      // This is to return observable result
      // To go back to httpclient, replace Jsonp
      return this.HttpClient.get<any>(url, this.httpOptions).pipe(
        catchError(this.handleError(operationName, []))
        );
    }

    /*
    *  This is to add url parameters in url
    *
    *  url: where the info will be added
    *  data: Object file, which will have information
    *
    *  Note: This can be improved with RequestOption, but it is buggy for now.
    */

    private AppendUrl(url: string, data:object): string{
      url += "?"
      for( let e in data){
        url += "&" + e + "=" + encodeURIComponent(data[e]);
      }

      return url;
    }


    //
    // This is to handle http error.
    //

    private handleError<T>(operation = 'Unknown', result?: T) {
      return (error: any): Observable<T> => {
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

    constructor(private HttpClient: HttpClient,
      private Jsonp: Jsonp) { }

}

