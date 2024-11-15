export function logVehicleCreation<T extends { new(...args: any[]): {} }>(target: T) {
    const originalConstructor = target;

    class NewConstructor extends originalConstructor {
        constructor(...args: any[]) {
            super(...args);
            const vehicle = this;
            const vehicleProperties = ['model', 'make', 'year'];
            const logContent = vehicleProperties.filter(prop => prop in vehicle);
            console.log("Création du véhicule", logContent);
        }
    }

    return NewConstructor;
}
