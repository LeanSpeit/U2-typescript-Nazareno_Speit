class Car1 {
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

const car2 = new Car1('Chevrolet')

car1.drive()