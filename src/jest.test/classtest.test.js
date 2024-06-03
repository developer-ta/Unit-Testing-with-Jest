import NewHealth from "../app/classTest.js";

beforeAll(() => {
  console.log("beforeAll: ------------------------>", beforeAll);
});

const health = new NewHealth();

describe("describe() group 1 ------------------------>: ", () => {
  test("class NewHealth 1:", () => {
    health.FineUser(1);
    expect(health.user).toEqual("jean");
  });

  test.only("class NewHealth 2:", () => {
    console.log('test.only: -----------------------------------------------------', test.only);
    health.FineUser(1);
    expect(health.user).toEqual("jean");
  });
});
afterAll(() => {
  console.log("afterAll: ------------------------>", afterAll);
});
