type Car = {
    numberOfDoors: number
}

type Truck = {
    cargoCapacity: number
}

type VehicleType = Car | Truck;

function isCar(vehicle: VehicleType): vehicle is Car {
    return (vehicle as Car).numberOfDoors !== undefined;
}

function isTruck(vehicle: VehicleType): vehicle is Truck {
    return (vehicle as Truck).cargoCapacity !== undefined;
}
function getVehicleDescription(vehicle : VehicleType) : string {
    if (isCar(vehicle)) {
        return "Cette voiture possède "+vehicle.numberOfDoors+"."
    }else{
        return "Ce camion a une capacité de chargement de "+vehicle.cargoCapacity+"kg."
    }
}

const myCar: Car = { numberOfDoors: 4 };
const myTruck: Truck = { cargoCapacity: 200 };

console.log(getVehicleDescription(myCar))
console.log(getVehicleDescription(myTruck))