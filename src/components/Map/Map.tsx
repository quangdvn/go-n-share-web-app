/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable global-require */
import { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

type LeafletMapProps = {
  coordinates: any;
};

class LeafletMap extends Component<LeafletMapProps> {
  render() {
    return (
      <MapContainer
        center={this.props.coordinates}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: 400, width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={this.props.coordinates}
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
export default LeafletMap;
