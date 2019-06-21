import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface Location {
  latitude: string;
  longitude: string;
}

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(public http: HttpClient) { }


}
