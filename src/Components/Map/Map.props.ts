import { LatLngExpression } from "leaflet";
export interface MapProps{
    position:LatLngExpression,
    zoom: number;
    markers: LatLngExpression[]
}