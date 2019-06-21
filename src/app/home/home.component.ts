import { Component, OnInit } from '@angular/core';
//import { DataService } from '../data.service';
import { MapsService} from '../maps.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  lat: number = 58.391645;
  lng: number = 13.857145;
  zoom: number = 18;

  constructor(public map: MapsService) { }

  ngOnInit() {

  }
}
