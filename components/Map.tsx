"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import { useEffect } from "react"

export function Map() {
  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl

    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
      iconUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    })
  }, [])

  const position: [number, number] = [8.9806, 38.7578]

  return (
    <div className="h-[400px] w-full">
      <MapContainer
        center={position}
        zoom={14}
        scrollWheelZoom={false}
        className="h-full w-full rounded-3xl"
      >
        <TileLayer
          attribution="© OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>
            <b>Hlina Pharmacy</b> <br /> Addis Ababa
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}