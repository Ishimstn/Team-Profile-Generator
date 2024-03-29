const Intern = require("../lib/intern")

test("Can instantiate Intern instance", () => {
    const e = new Intern();
    expect(typeof(e)).toBe("object");

});

test("Can set name constructor arguments", () => {
    const name = "Ishi";
    const e = new Intern(name)
    expect(e.name).toBe(name);
});