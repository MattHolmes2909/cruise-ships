const Port = require ("../src/port");

describe('Port', () => {
    it("Returns an object", () => {
    expect(new Port()).toBeInstanceOf(Object)    
 });
    it("Has a name property", () => {
        const port = new Port('Liverpool');
        expect(port.name).toBe('Liverpool');
});
    it("Can add a ship", () => {
        const port = new Port('Liverpool');
        const ship = {};
        port.addShip(ship);
        expect(port.ships).toContain(ship);
});
    it("Can remove a ship", () => {
        const port = new Port('Liverpool');
        const titanic = {};
        const queenMary = {}
        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);
        expect(port.ships).toEqual([titanic])
});

});
