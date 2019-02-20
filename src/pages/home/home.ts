import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapRef: ElementRef;


  constructor(public navCtrl: NavController) {}

  ionViewDidLoad(){
    // console.log(this.mapRef);
    this.showMap();
  }

  showMap(){
    //location - lat long
    const location = new google.maps.LatLng(33.738045,
        73.084488);

    // map options
    const options = {
      center: location,
      zoom: 15,
      streetViewControl: false,
      // mapTypeId: 'satellite'
      // mapTypeId: 'terrain'
      mapTypeId: 'hybrid'
    };

    const map = new google.maps.Map
    (this.mapRef.nativeElement, options);
    this.addMarker(location, map)
  }

  addMarker(position, map){
    return new google.maps.Marker({
      position,
      map
    });
  }

}
