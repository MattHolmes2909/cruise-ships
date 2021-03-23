class Port {
    constructor() {
        this.name = 'Liverpool';
        this.ships = []

    }
    addShip(ship) {
        this.ships.push(ship);
    };
    removeShip(ship) {
        this.ships.splice(ship, 1)
    };
};

module.exports = Port