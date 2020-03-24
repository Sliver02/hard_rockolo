import {BaseView} from '../base-view.js';
import {html} from '@polymer/lit-element';
import mapboxgl from 'mapbox-gl';

class CustomMap extends BaseView {

    static get properties() {
        return {
        };
    }
    
    constructor() {
        super();
        this.geojson = {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'message': 'Monte Ricco',
                        'iconSize': [50, 50]
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [12.3766833, 46.426482]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'message': 'Main Festival',
                        'iconSize': [60, 60]
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [12.378154, 46.428716]
                    }
                },
                
            ]
        };
    }

    render() {
        return html`
            <div id="map" class="map"></div>
        `;
    }

    firstUpdated() {
        this.initMap();
    }

    initMap() {
        var map = new mapboxgl.Map({
            container: 'map',
            center: [12.37653481071527, 46.427623023499734],
            zoom: 15,
            style: 'mapbox://styles/sliver02/ck85u1r900hv11iqc9x6haf0f',
            hash: true,
            accessToken: 'pk.eyJ1Ijoic2xpdmVyMDIiLCJhIjoiY2s4NXBmcDhqMDg2dzNkcGVvbTRoNDd3OCJ9.c74ira4lmsYsoPKkxXN5Ew',
            transformRequest: (url, resourceType)=> {
                if(resourceType === 'Source' && url.startsWith('http://myHost')) {
                    return {
                        url: url,
                        headers: { 'my-custom-header': true},
                        credentials: 'include'  // Include cookies for cross-origin requests
                    };
                }
            }
        });

        this.geojson.features.forEach(function(marker) {
            // create a DOM element for the marker
            var el = document.createElement('div');
            el.className = 'marker';
            el.style.backgroundImage =
            'url(https://placekitten.com/g/' +
            marker.properties.iconSize.join('/') +
            '/)';
            el.style.width = marker.properties.iconSize[0] + 'px';
            el.style.height = marker.properties.iconSize[1] + 'px';
             
            el.addEventListener('click', function() {
                window.alert(marker.properties.message);
            });
             
            // add marker to map
            new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);
        });

        return map;
    }
}

customElements.define('custom-map', CustomMap);