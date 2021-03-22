const Port = require ("../src/port");

describe('Port', () => {
    it("Returns an object", () => {
    expect(new Port()).toBeInstanceOf(Object)    
 });
    it("Has a name property", () => {
        const port = new Port('Liverpool');
        expect(port.name).toBe('Liverpool');
    });
});
