import axios from "axios";

const baseURL =
  "http://gdata.youtube.com/feeds/api/users/UCFR2oaNj02WnXkOgLH0iqOA/uploads?max-results=1";

export const getLastVideo = async () => {
  const { data } = await axios.get(`${baseURL}`);

  console.log(data);

  return data;
};
