import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map() {
  const mapStyles = {
    bookingMap: { height: "50vh" },
    rideMap: { height: "60vh" },
  };

  const bookingMapStyle = mapStyles.bookingMap;
  const rideMapStyle = mapStyles.rideMap;

  console.log(bookingMapStyle);

  return (
    <>
      <style type="text/css">{`
        .map {
          height: 100%;
          min-height: 100%
        }
      `}</style>

      {/* <div style={{ height: "60vh" }}> */}
      <div style={rideMapStyle}>
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
      </div>
    </>
  );
}
