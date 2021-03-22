const Ship = require ("../src/ship");
const Port = require ("../src/port");

describe('Ship', () => {
   it("Returns an object", () => {
   expect(new Ship()).toBeInstanceOf(Object)    
});
   it("Has a starting port", () => {
    const ship = new Ship('Liverpool');
    expect(ship.startingPort).toEqual('Liverpool')   
});
    it("Can set sail", () => {
        const ship = new Ship('Liverpool')
        ship.setSail();
        expect(ship.startingPort).toBe(false);
    });
    it("Can dock at different ports", () => {
        const belfast = new Port('Belfast');
        const ship = new Ship(belfast);
        const liverpool = new Port('Liverpool');
        ship.dock(liverpool)
        expect(ship.currentPort).toBe(liverpool)
    })
});