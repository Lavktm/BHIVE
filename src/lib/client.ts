import axios from "axios";

import { getFromLocalStorage } from "@/lib/helper";

import { siteConfig } from "@/constants/config";

export const authorizationToken =
  getFromLocalStorage("token") ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTY5NjIyODYsInN1YiI6ImFzZGZhZiJ9.SkOaFQV2JSLxCBEYXZFruampi4YPSupGM2i_VEPCEVY";

export const axiosClient = axios.create({
  baseURL: siteConfig.appApiUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${authorizationToken}`,
  },
});
