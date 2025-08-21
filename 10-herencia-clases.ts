class Car2 {
    make: string

    constructor(make: string) {
        this.make = make
    }

    drive() {
        console.log (`Driving a ${this.make}`)
    }

    getMake() {
        return this.make
    }
}

class ElectricCar extends Car2 {
    batteryLife: number

    constructor(make: string, batteryLife: number) {
        super(make)
        this.batteryLife = batteryLife
    }

    charge() {
        console.log(`Driving an electric ${this.make} with a battery life of ${this.batteryLife} kWh`)
    }
}

const car3 = new ElectricCar('Tesla', 100);
car3.drive();
car3.charge();