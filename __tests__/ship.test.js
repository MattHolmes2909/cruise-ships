const Ship = require ("../src/ship");

describe('Ship', () => {
   it("Returns an object", () => {
   expect(new Ship()).toBeInstanceOf(Object)    
});
   it("Has a starting port", () => {
    const ship = new Ship('Liverpool')
    expect(ship.startingPort).toBe('Liverpool');    
   });
});