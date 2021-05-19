const Manager = require("../lib/manager")

test("Can instantiate Manager instance", () => {
    const e = new Manager();
    expect(typeof(e)).toBe("object");

});

test("Can set name constructor arguments", () => {
    const name = "Ishi";
    const e = new Manager(name)
    expect(e.name).toBe(name);
});