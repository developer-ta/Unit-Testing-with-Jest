test("matchers jest test > then ; toBeGreaterThan()", () => {
  const count = 10;

  expect(count).toBeGreaterThan(9);
});

test("matchers jest test >= then ; toBeGreaterThanOrEqual()", () => {
  const count = 10;

  expect(count).toBeGreaterThanOrEqual(10);
});

test("matchers jest test = |val| ; toBeCloseTo()", () => {
  const val1 = 0.1;
  const val2 = 0.2;
  //    Expected: 0.3
  //Received: 0.30000000000000004;
  //expect(val1 + val2).toEqual(0.3);
  expect(val1 + val2).toBeCloseTo(0.3);
});
