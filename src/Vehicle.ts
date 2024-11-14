export class Vehicle {
    public model: string
    public make: string
    public year: number

    public constructor(model: string, make: string, year: number) {
        this.model = model
        this.make = make
        this.year = year
    }

    public getModel(): string {
        return this.model
    }

    public getMake(): string {
        return this.make
    }

    public getYear(): number {
        return this.year
    }

    public getVehicleInfo(){
        console.log("Ce véhicule est une "+this.make+" "+this.model+" construite en "+this.year)
    }
}

export class RentalVehicle extends Vehicle {
    public dailyRate: number;

    public constructor(model: string, make: string, year: number, dailyRate: number) {
        super(model, make, year);
        this.dailyRate = dailyRate;
    }

    public getVehiculeInfo() {
        console.log("Ce véhicule est une "+this.make+" "+this.model+" construite en "+this.year+ "au prix de "+this.dailyRate+"€ par jour")

    }

    public calculateTotalRentalCost( numberOfDays: number, reduction: number = 0):number {
        const rentalGross: number = this.dailyRate * numberOfDays ;
        const percentage: number = reduction / 100
        return rentalGross - rentalGross * percentage ;
    }
}