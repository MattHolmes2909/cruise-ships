const Itinerary = require ("../src/itinerary");
const Port = require("../src/port");

describe('Itinerary', () => {
    it("Returns an object", () => {
    expect(new Itinerary()).toBeInstanceOf(Object)    
 });
    it("Can have ports", () => {
        const belfast = new Port('Belfast');
        const liverpool = new Port('Liverpool');
        const itinerary = new Itinerary([belfast, liverpool]);
        expect(itinerary.ports).toEqual([belfast, liverpool]);
    });
});