import axios from "axios";
import env from "react-dotenv";

const baseUrl = axios.create({
  baseURL: env.API_URL,
});

export default baseUrl;
