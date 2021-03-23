const Ship = require ("../src/ship");
const Port = require ("../src/port");
const Itinerary = require ("../src/itinerary");

describe('Ship', () => {
   it("Returns an object", () => {
   const port = new Port('Liverpool');
   const itinerary = new Itinerary([port]);
   const ship = new Ship(itinerary)
    expect(ship).toBeInstanceOf(Object)    
});
   it("Has a starting port", () => {
    const port = new Port('Liverpool');
    const itinerary = new Itinerary([port])
    const ship = new Ship(itinerary);
    expect(ship.currentPort).toBe(port)  
});
    it("Can set sail", () => {
        const belfast = new Port('Belfast')
        const liverpool = new Port('Liverpool');
        const itinerary = new Itinerary([belfast, liverpool]);
        const ship = new Ship(itinerary);
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
        expect(belfast.ships).not.toContain(ship)
});
    it("Can dock at different ports", () => {
        const belfast = new Port('Belfast');
        const liverpool = new Port('Liverpool');
        const itinerary = new Itinerary([belfast, liverpool])
        const ship = new Ship(itinerary)
        ship.setSail()
        ship.dock()
        expect(ship.currentPort).toBe(liverpool)
});
    it("Doesnt sail past its itinerary", () => {
        const belfast = new Port('Belfast');
        const liverpool = new Port('Liverpool');
        const itinerary = new Itinerary([belfast, liverpool]);
        const ship = new Ship(itinerary);
        ship.setSail();
        ship.dock();
        expect(() => ship.setSail()).toThrowError('End of itinerary')
});
    it("Gets added to port when created", () => {
        const liverpool = new Port("liverpool");
        const itinerary = new Itinerary([liverpool]);
        const ship = new Ship(itinerary);
        expect(liverpool.ships).toContain(ship);
});
    it("Can dock at different ports", () => {
        const liverpool = new Port('Liverpool');
        const belfast = new Port('Belfast');
        const itinerary = new Itinerary([liverpool, belfast]);
        const ship = new Ship(itinerary);
        ship.setSail();
        ship.dock();
        expect(ship.currentPort).toBe(belfast);
        expect(belfast.ships).toContain(ship);
    })

});