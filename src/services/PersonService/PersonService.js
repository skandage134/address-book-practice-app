import axios from "axios";

const BASE_RANDOM_USERS_URL = process.env.REACT_APP_BASE_RANDOM_USERS_URL;

export const fetchPersons = (page) => {
  const response = axios.get(
    `${BASE_RANDOM_USERS_URL}/?page=${page}&results=10&seed=abc&?exc=login`,
    {
      method: "GET",
      headers: {
        "Content-Type": "text/plain",
        "Access-Control-Allow-Origin": "https://randomuser.me",
      },
    }
  );

  return response;
};
