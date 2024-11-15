import {Vehicle} from "./classes/Vehicle.js";

const vehicles: Vehicle[] = [];

const form = document.getElementById('vehicle-form') as HTMLFormElement;
const makeInput = document.getElementById('make') as HTMLInputElement;
const modelInput = document.getElementById('model') as HTMLInputElement;
const yearInput = document.getElementById('year') as HTMLInputElement;
const vehicleList = document.getElementById('vehicle-list') as HTMLUListElement;

const displayVehicles = () => {
    vehicleList.innerHTML = '';
    vehicles.forEach(vehicle => {
        const li = document.createElement('li');
        li.textContent = `${vehicle.make} ${vehicle.model} (${vehicle.year})`;
        vehicleList.appendChild(li);
    });
};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!makeInput || !modelInput || !yearInput || !vehicleList) {
        console.error("Un ou plusieurs éléments DOM sont manquants.");
        return;
    }

    const make = makeInput.value;
    const model = modelInput.value;
    const year = parseInt(yearInput.value);

    const newVehicle = new Vehicle(make, model, year);
    vehicles.push(newVehicle);

    form.reset();
    displayVehicles();
});