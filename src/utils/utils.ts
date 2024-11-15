import {Vehicle} from "../classes/Vehicle";
import {Car, Truck} from "../types/types";

export function calculateTotalRentalCost( dailyRate: number, numberOfDays: number, reduction: number):number {
    const rentalGross: number = dailyRate * numberOfDays ;
    const percentage: number = reduction / 100
    return rentalGross - rentalGross * percentage ;
}

export function RentalCostForVehicle (vehicle: Vehicle, dailyRate: number, numberOfDays: number, reduction: number = 0): void{
    let cost: number = calculateTotalRentalCost(dailyRate, numberOfDays, reduction)
    let text: string = "La location du véhicule "+vehicle.make+" "+vehicle.model+" pour "+numberOfDays+" jours au tarif de "+dailyRate+"€ journalier s'élève à "+cost+"€"
    if (reduction > 0){
        text += " après remise de "+reduction+"%"
    }
    console.log(text);
}
export function printVehicleInfo (vehicle : Vehicle | Car | Truck) : string {
    let text: string = "Marque :"+vehicle.make+", Modèle : "+vehicle.model+", année de construction : "+vehicle.year;
    if ( 'numberOfDoors' in vehicle ){
        let add = ", nombre de portes : "+vehicle.numberOfDoors
        text += add;
    }
    else if ( 'cargoCapacity' in vehicle ){
        let add = ", capacité de chargement : "+vehicle.cargoCapacity+" Kg"
        text += add;
    }
    return text;
}