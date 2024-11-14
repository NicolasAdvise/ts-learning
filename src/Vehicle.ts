export class Vehicle {
    private model: string
    readonly make: string
    protected year: number

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
    //Le private empêche d'accéder à la valeur du fait que nous sommes dans une classe dérivée et retourne une erreur à la compilation.
}