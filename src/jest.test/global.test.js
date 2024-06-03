import { priseA, priseB } from "../app/prise.js";

// const prise = require("../app/prise.js");
// const { priseA, priseB } = prise;

test("priseA() ; param: 200 ;", () => {
  expect(priseA(200)).toBe("VIP client");
});

test("priseB() ; param: 100 ;", () => {
  expect(priseB(100)).toBe("2 client");
});
