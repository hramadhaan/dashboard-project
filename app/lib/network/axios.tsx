import axios from "axios";

export const axiosClient = axios.create({
  baseURL: process.env.ONLINE_SHOP_API,
  timeout: 10000,
});
