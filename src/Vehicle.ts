export class Vehicle {
    private model: string
    private make: string
    private year: number

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