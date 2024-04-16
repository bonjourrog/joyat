import { LatLngExpression } from "leaflet";

export interface City{
    id: string;
    city: string;
    description: string;
    floor: string;
    location:LatLngExpression;
    location_name: string;
    name: string;
    price: number;
    size: string;
}