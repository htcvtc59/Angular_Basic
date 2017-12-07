import { Component, OnInit } from '@angular/core';
import { ServiceweatherService } from '../serviceweather.service';

@Component({
  selector: 'app-serviceweather',
  templateUrl: './serviceweather.component.html',
  styleUrls: ['./serviceweather.component.css'],
  providers: [ServiceweatherService]
})
export class ServiceweatherComponent implements OnInit {
  json: String;

  constructor(private weatherService: ServiceweatherService) {
    // this.weatherService.getWeather()
    // .then(res => this.json = res.ip)
    // .catch(err=>console.log(err));
  }

  ngOnInit() {
    this.weatherService.getWeather()
      .then(res => this.json = res.ip)
      .catch(err => console.log(err));
  }

}
