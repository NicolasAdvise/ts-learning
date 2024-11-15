import {Car, Truck} from "../types/types";

export type VehicleType<T extends Vehicle> = T extends { cargoCapacity: number } ? Truck : Car;

export class Vehicle {
    public model: string
    public make: string
    public year: number

    public constructor(make: string, model: string, year: number) {
        this.model = model
        this.make = make
        this.year = year
    }

}

