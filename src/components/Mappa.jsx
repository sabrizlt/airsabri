import React from "react";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { SiGooglemaps } from "react-icons/si";
import L from "leaflet"; // Importa l'oggetto 'L' da "leaflet"

function BasicExample() {
  const routes = [
    { name: "New York", position: [40.7128, -74.006] },
    { name: "Roma", position: [41.9028, 12.4964] },
    { name: "Parigi", position: [48.8566, 2.3522] },
    { name: "Tokyo", position: [35.6895, 139.6917] },
    { name: "Londra", position: [51.5074, -0.1278] },
  ];

  const customIcon = new L.divIcon({
    html: `<div style="display: flex; align-items: center;"><SiGooglemaps size={20} /></div>`,
    iconSize: [20, 20],
  });

  return (
    <div style={{ height: "92vh", width: "100vw", overflow: "hidden" }}>
      <MyNavbar />
      <h1 className="text-center titleHome ticketTitle fw-bold">
        <span className="caption">MAPPA DELLE TRATTTE</span>
      </h1>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        style={{ height: "100%", width: "100%" }}
        dragging={false}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {routes.map((route, index) => (
          <Marker key={index} position={route.position} icon={customIcon}>
            <Popup>{route.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
      <div className="fixed-bottom">
        <MyFooter />
      </div>{" "}
    </div>
  );
}

export default BasicExample;
