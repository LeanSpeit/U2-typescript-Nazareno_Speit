class _Car {
    make: string

    constructor(make: string) {
        this.make = make
    }

    drive() {
        console.log (`Driving a ${this.make}`)
    }
}

const car1 = new _Car('Chevrolet')

car1.drive()