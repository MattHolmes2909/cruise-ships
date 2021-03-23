const Port = require ("../src/port");

describe('Port', () => {
    describe('With ports and ships', () => {
        let port;
        let titanic;
        let queenMary;
        let ship;
        beforeEach(() => {
            port = new Port('liverpool');
            titanic = {};
            queenMary = {};
            ship = titanic;
        });
    it("Has a name property", () => {
        expect(port.name).toBe('Liverpool');
});
    it("Can add a ship", () => {
        port.addShip(ship);
        expect(port.ships).toContain(ship);
});
    it("Can remove a ship", () => {
        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);
        expect(port.ships).toEqual([titanic])
});
});
    it("Returns an object", () => {
    expect(new Port()).toBeInstanceOf(Object)    
 });


});
