const appender = require('../jasminetest.js');

describe("string appender", () => {
    const squeezeJuice = appender(" juice");
    it("adds sauce to string", () => {
        const makeSauce = appender(" sauce");
        expect(makeSauce("apple")).toEqual("apple sauce");
    });
    it("adds juice to string", () => { 
        expect(squeezeJuice("leek")).toEqual("leek juice");
    });
    it("adds juice to string", () => {
        expect(squeezeJuice("leek")).toEqual("leek juice");
    });
});