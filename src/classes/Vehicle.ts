import { Car, Truck } from "../types/types";
import { logVehicleCreation } from "../utils/LogVehicleCreation.js";

export type VehicleType<T extends Vehicle> = T extends { cargoCapacity: number } ? Truck : Car;

@logVehicleCreation
export class Vehicle {
    public model: string;
    public make: string;
    public year: number;

    public constructor(make: string, model: string, year: number) {
        this.model = model;
        this.make = make;
        this.year = year;
    }
}
