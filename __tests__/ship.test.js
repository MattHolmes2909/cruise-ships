const Ship = require ("../src/ship");
const Port = require ("../src/port");
const Itinerary = require ("../src/itinerary");

describe('Ship', () => {
    describe('with ports and an itinerary', () => {
    let ship;
    let liverpool;
    let belfast;
    let itinerary; 
        beforeEach(() =>  {     
        liverpool = new Port('Liverpool');
        belfast = new Port('Belfast');
        itinerary = new Itinerary([liverpool, belfast]);
        ship = new Ship(itinerary);
    });
        it("Returns an object", () => {
    expect(ship).toBeInstanceOf(Object)    
});
   it("Has a starting port", () => {
    expect(ship.currentPort).toBe(liverpool)  
});
    it("Can set sail", () => {
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
        expect(belfast.ships).not.toContain(ship)
});
    it("Gets added to port when created", () => {
        expect(liverpool.ships).toContain(ship);
});
    it("should start with 0 passengers", () => {
        expect(ship.passengers).toBe(0);
    });
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
        const liverpool = new Port('Liverpool');
        const belfast = new Port('Belfast');
        const itinerary = new Itinerary([liverpool, belfast]);
        const ship = new Ship(itinerary);
        ship.setSail();
        ship.dock();
        expect(() => ship.setSail()).toThrowError('End of itinerary')
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
});
});