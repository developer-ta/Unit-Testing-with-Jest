import { fetchData, fetchDataAsync } from "../app/fetchData.js";

test("fetchData(); params: ", (done) => {
  fetchData((data) => {
    console.log('"fetchData()', data);
    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    });

    done();
  });
});

test("fetchDataAsync(); params: ", async () => {
  const res = await fetchDataAsync();
  console.log("res: ", res);
  console.log("res.data: ", res.data);
  expect(res.data).toEqual({
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  });
});

test("fetchDataAsync(); params: ", async () => {
  const res = await fetchDataAsync();

  expect(res.data).toMatchObject({
    userId: 1,

    title: "delectus aut autem",
    completed: false,
  });
});

test("fetchDataAsync(); resolves.toMatchObject(): ", async () => {
  expect(fetchDataAsync()).resolves.toMatchObject({
    userId: 1,
  });
});
