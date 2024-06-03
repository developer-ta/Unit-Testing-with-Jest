test("matchers jest match === then ; toMatch()", () => {
  const str = "A,B,C,D";

  expect(str).toMatch("D");
});

test("matchers jest match === then ; toContain()", () => {
  const arr = ["A", "B", "C", "D"];

  expect(arr).toContain("D");
});

const toTrowNewErrorFunc = () => {
  throw new Error("this is error : toTrowNewErrorFunc()");
};
test("matchers jest new Error() === then ; toThrow()", () => {
  expect(toTrowNewErrorFunc).toThrow("this is error : toTrowNewErrorFunc()");
});

const toNotTrowNewErrorFunc = () => {
 
};
test("matchers jest new Error() === then ; toThrow()", () => {
  expect(toNotTrowNewErrorFunc).not.toThrow("this is error : toTrowNewErrorFunc()");
});