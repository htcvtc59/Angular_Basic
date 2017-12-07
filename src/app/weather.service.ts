import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }

  getWeather(cityName: String) {
    const url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=152386ea138e2ffdcf59f2e2e70f7ac2&q=' + cityName;
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .then(resJson => resJson.main.temp);
  }

}
