require (jasminetest.js);

describe("string appender", () => {
    it("adds sauce to string", () => {
        const makeSauce = appender(" sauce");
        expect(makeSauce("apple")).toEqual("apple sauce");
    });
    it("adds juice to string", () => {
        const squeezeJuice = appender(" juice");
        expect(squeezeJuice("leek")).toEqual("leek juice");
    });
    it("adds juice to string", () => {
        const squeezeJuice = appender(" juice");
        expect(squeezeJuice("leek")).toEqual("leek juice");
    });
});