import {BaseView} from '../base-view.js';
import {html} from '@polymer/lit-element';
import mapboxgl from 'mapbox-gl';

class FiundusSection extends BaseView {

    static get properties() {
        return {
        };
    }
    
    constructor() {
        super();
        this.map = undefined;
        this.infoShow = false;
        this.geojson = {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'infobox': false,
                        'icon': 'local_parking',
                        'iconSize': [50, 50]
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [12.374105053512778, 46.427489974366836]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'infobox': true,
                        'img': '',
                        'description': 'Truckeroo brings dozens of food trucks, live music, and games to half and M Street SE (across from Navy Yard Metro Station) today from 11:00 a.m. to 11:00 p.m.',
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
                        'infobox': true,
                        'img': '',
                        'description': 'Truckeroo brings dozens of food trucks, live music, and games to half and M Street SE (across from Navy Yard Metro Station) today from 11:00 a.m. to 11:00 p.m.',
                        'iconSize': [80, 80]
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
            <div class="map__info">
                <ul>
                    <dt></dt>
                    <li><strong>Cittá:</strong> Pieve di Cadore, 32044, BL</li>
                    <li><strong>Main stage:</strong> <a href="" @click="${() => this.flyToMarker(2)}">Ex pattinaggio, Parco Roccolo</a></li>
                    <li><strong>Forti stage:</strong> <a href="" @click="${() => this.flyToMarker(1)}">Forte di Monte Ricco</a></li>
                    <li><strong>Parcheggio:</strong> <a href="" @click="${() => this.flyToMarker(0)}">Piazzale degli Aplini</a></li>
                </ul>
            </div>
        `;
    }

    firstUpdated() {
        this.initMap();
        this.map.resize();
    }

    // inizializzo la mappa con valori di default, tra cui lo stile creato sul portale di mapbox
    // limiti e zoom iniziale, e centramento iniziale (basato sulla media dei marker)
    initMap() {
        const mapCenter = this.averageGeolocation(this.geojson.features);

        this.map = new mapboxgl.Map({
            container: 'map',
            center: mapCenter,
            zoom: 15,
            minZoom: 5,
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

        this.renderMarkers(this.map);

        return this.map;
    }

    renderMarkers() {
        this.geojson.features.forEach( (marker, index) => {
            
            var el = document.createElement('div');
            el.className = 'marker';

            if (marker.properties.icon === 'local_parking') {
                el.classList.add('marker--parking');
                el.style.backgroundImage = `url(../../assets/img/icons/${marker.properties.icon}.svg)`;
            } else {
                el.style.backgroundImage = `url(../../assets/img/icons/hr_stemma.svg)`;
            }

            el.style.width = marker.properties.iconSize[0] + 'px';
            el.style.height = marker.properties.iconSize[1] + 'px';

            var coordinates = marker.geometry.coordinates.slice();
            var description = `
                <img src="${marker.properties.img}"/>
                <p> ${marker.properties.description} </p>
            `;
           
            // el.addEventListener('click', (e) => {
            //     this.map.flyTo({ center: coordinates });
            // });         

            if (marker.properties.infobox) {
                var popup = new mapboxgl.Popup({ offset: marker.properties.iconSize[0] / 2 })
                .setLngLat(coordinates)
                .setHTML(description);

                new mapboxgl.Marker(el)
                .setLngLat(coordinates)
                .setPopup(popup)
                .addTo(this.map);
            } else {
                new mapboxgl.Marker(el)
                .setLngLat(coordinates)
                .addTo(this.map);
            }
             
        });
    }

    flyToMarker(markerID) {
        var coordinates = this.geojson.features[markerID].geometry.coordinates.slice();

        if (this.map != undefined) {
            this.map.flyTo({ center: coordinates, zoom: 18, });
        }
    }

    averageGeolocation(features) {


        if (features.length === 1) {
            return features[0];
        }

        let x = 0.0;
        let y = 0.0;
        let z = 0.0;

        features.forEach(feature => {
            let latitude = feature.geometry.coordinates[0] * Math.PI / 180;
            let longitude = feature.geometry.coordinates[1] * Math.PI / 180;

            // console.log(latitude);

            x += Math.cos(latitude) * Math.cos(longitude);
            y += Math.cos(latitude) * Math.sin(longitude);
            z += Math.sin(latitude);
        });

        let total = features.length;

        x = x / total;
        y = y / total;
        z = z / total;

        let centralLongitude = Math.atan2(y, x);
        let centralSquareRoot = Math.sqrt(x * x + y * y);
        let centralLatitude = Math.atan2(z, centralSquareRoot);

        return [centralLatitude * 180 / Math.PI, centralLongitude * 180 / Math.PI];
    }
}

customElements.define('findus-section', FiundusSection);