import {RentalVehicle, Vehicle} from "./Vehicle";

const v1 = new Vehicle("Renault","Clio",2004);
const v2 = new Vehicle("Peugeot","208",2009);
const v3 = new Vehicle("Toyota","Yaris",2020);
const v4 = new RentalVehicle("Opel","Corsa",1999, 70);

v4.make="Ferrari";
//Le readonly empêche la modification de la valeur après sa définition.
console.log(v4.year)
//Le protected empêche d'accéder à la proprité year car nous sommes dans un contexte extérieur à la classe ou à une classe héritante.
console.log(v4.dailyRate)
v4.dailyRate = 120;
//dailyRate étant public, il est possible de lire et d'écrire sur cette propriété.

v1.getVehicleInfo()
v2.getVehicleInfo()
v3.getVehicleInfo()
v4.getVehicleInfo()