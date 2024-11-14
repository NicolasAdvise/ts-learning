import {RentalVehicle, Vehicle} from "./Vehicle";

const v1 = new Vehicle("Renault","Clio",2004);
const v2 = new Vehicle("Peugeot","208",2009);
const v3 = new Vehicle("Toyota","Yaris",2020);
const v4 = new RentalVehicle("Opel","Corsa",1999, 70);

let rentalCost:number = v4.calculateTotalRentalCost(15,10)
console.log('La location de 15 jours avec une reduction de 10% du véhicule '+v4.make+" "+v4.model+" reviendra à un total de "+rentalCost+"€.")

rentalCost = v4.calculateTotalRentalCost(7)
console.log('La location de 15 jours du véhicule'+v4.make+" "+v4.model+" reviendra à un total de "+rentalCost+"€.")