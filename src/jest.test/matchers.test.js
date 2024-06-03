test("matchers jest test ; toBe()", () => {
  expect("match").toBe("match");
});

test("matchers jest test ; toEqual()", () => {
  const obj = { a: 1 };
  const list = [1, 2];
  expect(list).toEqual([1, 2]);
});

test("matchers jest test ; toBeNull()", () => {
  const obj = null;

  expect(obj).toBeNull();
});

test("matchers jest test ; toBeUndefined()", () => {
  const obj = undefined;

  expect(obj).toBeUndefined();
});
test("matchers jest test ; toBeDefined()", () => {
  const obj = {};

  expect(obj).toBeDefined();
});

test("matchers jest test ; toBeTruthy()", () => {
  const val =true ;

  expect(val).toBeTruthy();
});
test("matchers jest test ; toBeFalsy()", () => {
  const val = false;

  expect(val).toBeFalsy();
});