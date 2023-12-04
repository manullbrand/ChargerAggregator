import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


function getStyles(currentPage) {
  if (currentPage === "booking") {
    return { height: "50%" };
  }
  if (currentPage === "ride") {
    return { height: "60%" };
  }
  console.log("Please provide the current page");
}

export default function Map({ currentPage }) {
  return (
    <>
      <MapContainer
        style={getStyles(currentPage)}
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
    </>
  );
}
