import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { IActivity } from '../shared/activity.model';
import { ActivityService } from '../services/activity.service';
import { SAVED_ACTIVITIES } from '../shared/activities';


let apiToken = environment.MAPBOX_API_KEY;
declare var omnivore: any;
declare var L: any;


const defaultCoords: number[] = [40, -80];
const defaultZoom = 8;

@Injectable()
export class MapService {

  getActivity(id: number) {
    return SAVED_ACTIVITIES.slice(0).find(run => run.id === id);
  }

plotActivity(id: number) {
  let myStyle = {
    'color': '#3949AB',
    'weight': 5,
    'opacity': 0.95
  };

  let map = L.map('map').setView(defaultCoords, defaultZoom);

  map.maxZoom = 100;


  L.tileLayer('https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    // tslint:disable-next-line:max-line-length
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.dark',
    accessToken: apiToken
  }).addTo(map);

  let customLayer = L.geoJson(null, {
    style: myStyle
  });

  let gpxLayer = omnivore.gpx(SAVED_ACTIVITIES.slice(0).find(run => run.id === id).gpxData, null, customLayer)
  .on('ready', function() {
    map.fitBounds(gpxLayer.getBounds());
  }).addTo(map);
}

  constructor() { }

}
