import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "ccfcae50dcmsh5a50faecda0a98ep1de6ccjsn8465450cdbc7",
    },
  });

  return data
}