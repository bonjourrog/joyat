import { LatLngExpression } from "leaflet";

export interface Lot{
    id: string;
    city: string;
    description: string;
    floor: string;
    location:LatLngExpression;
    location_name: string;
    name: string;
    price: Array<number|string>;
    size: string;
    location_image:string;
    images:string[];
    layers:LatLngExpression[] | LatLngExpression[][]
}