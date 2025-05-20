
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";



// const HOST_URL = import.meta.env.VITE_BACKEND_HOST;
// const API_VERSION = import.meta.env.VITE_API_VERSION;

const authApi = axios.create({
  // baseURL: `${HOST_URL}/${API_VERSION}`,
  baseURL:'http://204.48.28.68:8002',
  timeout: 10000,
});

authApi.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

authApi.interceptors.response.use(
  (response) => response, 
  async (error: AxiosError) => {
    // if (error.response?.status === 401) {
    //   // const newAccessToken = await AuthService.refreshToken();
    //   // console.log(newAccessToken);
      
    //   if (newAccessToken) {
    //     error.config!.headers["Authorization"] = `Bearer ${newAccessToken}`;
    //     return authApi.request(error.config!); 
    //   }
    //   notification.error({ message: "Session expired", description: "Please log in again." });
    // }
    return Promise.reject(error);
  }
);

export const endpoints = {
  auth: {
    login: "/login/", // POST
    register: "/register/", // POST
    accept:"/accept/" //POST
  },
};

export default authApi;
