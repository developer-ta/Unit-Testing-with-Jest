import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData = (externalFunc) => {
  axios.get(url).then((res) => {
    externalFunc(res.data);
  });
};

const fetchDataAsync = () => {
  return axios.get(url);
};

export { fetchData, fetchDataAsync };
