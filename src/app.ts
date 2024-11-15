import {Vehicle} from "./classes/Vehicle";
import {Car, Truck } from "./types/types";
import { RentalCostForVehicle, printVehicleInfo } from "./utils/utils";

const v1 = new Vehicle("Renault","Clio",2004);
const v2 = new Vehicle("Peugeot","208",2009);
const v3 = new Vehicle("Toyota","Yaris",2020);
const v4: Car = Object.assign(new Vehicle("Opel","Corsa",1999), { numberOfDoors: 4});
const v5: Truck = Object.assign(new Vehicle("Renault", "Traffic", 2015), { cargoCapacity: 350});


console.log(printVehicleInfo(v4));
console.log(printVehicleInfo(v5));

RentalCostForVehicle(v3,55,12,15);
RentalCostForVehicle(v4,62,7,0);
RentalCostForVehicle(v5,98,3,10);

//Note : J'ai un petit peu modifié les fonctions dans utils par rapport à ce qui était demandé. C'est volontaire mais
//Ca ne devrait pas changer le fond de l'excercice.