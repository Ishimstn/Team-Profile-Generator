const Employee = require("../lib/employee")

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");

});

test("Can set name constructor arguments", () => {
    const name = "Ishi";
    const e = new Employee(name)
    expect(e.name).toBe(name);
});