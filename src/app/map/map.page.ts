import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { loadModules } from 'esri-loader';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit, OnDestroy {
  @ViewChild('map', { static: true }) private mapViewEl: ElementRef;
  view: any;
  constructor() { }

  async initializeMap() {
    try {
      const [Map, MapView] = await loadModules(['esri/Map', 'esri/views/MapView']);

      const mapProperties = {
        basemap: 'dark-gray-vector'
      };

      const map = new Map(mapProperties);

      const mapViewProperties = {
        container: this.mapViewEl.nativeElement,
        center: [0.1278, 51.5074],
        zoom: 7,
        map
      };

      this.view = new MapView(mapViewProperties);

      return this.view;
    } catch (error) {
      console.log('EsriLoader: ', error);
    }
  }

  ngOnInit() {
    this.initializeMap();
  }

  ngOnDestroy() {
    if (this.view) {
      this.view.container = null;
    }
  }
}
