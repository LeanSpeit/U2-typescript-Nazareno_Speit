class Car {
    make!: string

    drive(make: string) {
        console.log (`Driving a ${this.make}`)
    }
}

const car = new Car()

car.drive('Chevrolet')