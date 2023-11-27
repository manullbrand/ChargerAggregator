import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./style.css";

export default function Map() {
  return (
    <MapContainer
      
      className="map"
      center={[52.36553165267461, 4.882874376715673]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[52.36553165267461, 4.882874376715673]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
