import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { RequestOptions } from '@angular/http/src/base_request_options';


@Injectable()
export class ServiceweatherService {

  constructor(private http:Http) { }
   httpOptions = {
    headers: new Headers({ 'Content-Type': 'application/json' })
  };
  getWeather(){
     return this.http.get('http://ip.jsontest.com/'
     ,this.httpOptions)
     .toPromise()
     .then(res=>res.json())
     .then(resJson=>resJson);
  }

}
