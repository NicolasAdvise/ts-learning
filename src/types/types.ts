import { Vehicle} from "../classes/Vehicle";

export type Car = Vehicle & {
    numberOfDoors: number;
}

export type Truck = Vehicle &{
    cargoCapacity: number;
}
