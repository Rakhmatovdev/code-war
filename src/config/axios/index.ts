
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";



// const HOST_URL = import.meta.env.VITE_BACKEND_HOST;
// const API_VERSION = import.meta.env.VITE_API_VERSION;

const authApi = axios.create({
  // baseURL: `${HOST_URL}/${API_VERSION}`,
  baseURL:'https://api.coderswar.uz',
  timeout: 100000,
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
  content:'/content/', // GET
  profile:{
    getProfile:'/profile/', // GET
    changePassword:'/profile/change-password/', // POST
    updateProfile:'/profile/update/', // Patch
  },
  resetpassword:"/reset-password/", // POST
  topics:{
    base:"/topics/", // GET
    getTopics:'/topics/', // GET
    completeTopic:'/complete/', // Post
  },
  forgotpassword:'/forgot-password/', // POST
  comments:{
    get:"/api/comments/", // GET
    create:"/api/comments/create/", // POST
  },
  assignments:{
  base:"/assignments/", // GET
  submit:"/submit/", // POST
  },
  characters:"/characters/", // GET
  duel:{
    base:"/duel/", // GET
    available:"/duel/available/", // GET
    post:"/duel/create/", // POST
    assignments:"/assignments/", // GET
    join:"/join/", // POST
    submit:"/submit/", // POST
  },
  initialtest:{
    base:"/initial-tests/", // GET
    submit:"initial-tests/submit/", // POST
  },
 
choices:"/api/choices/", // GET
rating:"/users/rating/", // GET
contact:"/contact/", // POST
plans:"/plans/", // GET
};

export default authApi;
