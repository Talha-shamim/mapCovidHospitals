import React, { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const coordinates = [
  {
    name: "Rmch hospital",
    oxygenBedTotal: "50",
    oxygenBedAvailable: "25",
    normalBedTotal: "100",
    normalBedAvailable: "8",
    lat: 23.389697,
    lng: 85.350161,
  },

  {
    name: "nedica ranchi",
    oxygenBedTotal: "50",
    oxygenBedAvailable: "25",
    normalBedTotal: "100",
    normalBedAvailable: "8",
    lat: 23.3689119,
    lng: 85.3258173,
  },

  {
    name: "raj hospital",
    oxygenBedTotal: "50",
    oxygenBedAvailable: "25",
    normalBedTotal: "100",
    normalBedAvailable: "8",
    lat: 23.358804,
    lng: 85.324796,
  },

  {
    name: "Majid Alam hospital",
    oxygenBedTotal: "50",
    oxygenBedAvailable: "25",
    normalBedTotal: "100",
    normalBedAvailable: "8",
    lat: 23.3914607,
    lng: 85.3459135,
  },
];

const BasicMap = () => {
  const LAT = 25.096074;
  const LNG = 85.313119;
  const [center, setCenter] = useState({ lat: LAT, lng: LNG });
  const [userLatitude, setUserLatitude] = useState(23);
  const [userLongitude, setUserLongitude] = useState(23);
  const ZOOM_LEVEL = 9;

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setUserLatitude(position.coords.latitude);
        setUserLongitude(position.coords.longitude);
      });
    } else {
      console.log("Geo location Not Available");
    }
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <MapContainer center={center} zoom={ZOOM_LEVEL}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              {coordinates.map((hospital) => {
                return (
                  <Marker
                    key={hospital.lat}
                    position={[hospital.lat, hospital.lng]}
                  >
                    <Popup>
                      <div>
                        <h5>{hospital.name}</h5>
                        <p>Oxygen Bed Total : {hospital.oxygenBedTotal}</p>
                        <p>
                          Oxygen Bed Available : {hospital.oxygenBedAvailable}
                        </p>
                        <p>Normal Bed Total : {hospital.normalBedAvailable}</p>
                        <p>
                          Normal Bed Available : {hospital.normalBedAvailable}
                        </p>
                      </div>
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicMap;
