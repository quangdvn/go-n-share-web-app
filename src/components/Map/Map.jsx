/* eslint-disable global-require */
import { Component } from 'react';

let MapContainer;
let TileLayer;
let Marker;
let Popup;

export default class LeafletMap extends Component {
  componentDidMount() {
    // Only runs on Client, not on server render
    ({ MapContainer, TileLayer, Marker, Popup } = require('react-leaflet'));
    this.forceUpdate();
  }

  render() {
    return (
      <MapContainer
        center={coordinates}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: 400, width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={coordinates}
          icon={
            new Icon({
              iconUrl: 'https://i.ibb.co/82Gc7rR/Marker.png',
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
}
