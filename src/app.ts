import { Vehicle } from './Vehicle';

let v1 : Vehicle = {model:'Yaris',make:'Toyota',year:2020}
let v2 : Vehicle = {model:'Clio',make:'Renaut',year:2008}
let v3 : Vehicle = {model:'208',make:'Peugeot',year:2012}
let v4 : Vehicle = {model:'Corsa',make:'Opel',year:1999}

function printVehicleInfo (vehicle : Vehicle) : string {
    return "Marque :"+vehicle.make+", Modèle : "+vehicle.model+", année de construction : "+vehicle.year;
}

console.log(printVehicleInfo(v1));
console.log(printVehicleInfo(v2));
console.log(printVehicleInfo(v3));
console.log(printVehicleInfo(v4));