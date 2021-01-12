import axios from "axios";

const baseURL = "https://quote-garden.herokuapp.com/api/v3/quotes";

export const getRandomQuote = async () => {
  const { data } = await axios.get(`${baseURL}/random`);

  console.log(data);

  return data;
};
