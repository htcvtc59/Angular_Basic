import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
  txtCityName = '';
  cityName = '';
  txtTemp = null;
  isLoading = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {

  }
  getWeather() {
    this.isLoading = true;
    this.weatherService.getWeather(this.txtCityName)
      .then(temp => {
        this.cityName = this.txtCityName;
        this.txtTemp = temp;
        this.isLoading = false;
        this.txtCityName='';
      })
      .catch(err => {
        alert('Can not find your city');
        this.isLoading = false;
        this.cityName = '';
        this.txtCityName='';
      });
  }

  getMessage() {
    if (this.isLoading) {
      return 'Loading...';
    }
    return this.cityName === '' ? ' Enter your city name ' : (this.cityName + ' is now ' + this.txtTemp);
  }

}
