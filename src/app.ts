import {Vehicle} from "./classes/Vehicle";
import {Car, Truck } from "./types/types";
import {RentalCostForVehicle, printVehicleInfo, filterByYear} from "./utils/utils";

const v1 = new Vehicle("Renault","Clio",2004);
const v2 = new Vehicle("Peugeot","208",2009);
const v3 = new Vehicle("Toyota","Yaris",2020);
const v4: Car = Object.assign(new Vehicle("Opel","Corsa",1999), { numberOfDoors: 4});
const v5: Truck = Object.assign(new Vehicle("Renault", "Traffic", 2015), { cargoCapacity: 350});
const v6 = new Vehicle("Lada","Phase 1",1977);

const vehicles = [v1, v2, v3, v4, v5, v6];
const filteredList = filterByYear(vehicles, 2000)
