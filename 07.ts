class Car {
    make: string = "Chevrolet"

    drive() {
        console.log (`Driving a ${this.make}`)
    }
}

const car = new Car()

car.drive()