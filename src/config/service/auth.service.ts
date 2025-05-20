import { notification } from "antd";
import authApi, { endpoints } from "../axios";

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  access: string;
}

export interface RegisterData {
email: string,
middle_name: string,
first_name: string,
last_name:string,
otm: string,
course: number,
group:string,
direction: string,
role:string,
password: string
}

export interface RegisterResponse {
  message: string;
  access: string; // Add this if your backend supports it
}
export interface acceptData {
  email: string;
  code: string;
}

// Auth 
export const AuthService = {
  login: async (data: LoginData): Promise<LoginResponse> => {
    try {
      const response = await authApi.post<LoginResponse>(endpoints.auth.login, data);
      localStorage.setItem("accessToken", response?.data?.access);
      console.log(response.data);
      return response.data;
    } catch (error: unknown) {
      console.error("Login failed", error);
      let errorMessage = "An unknown error occurred";
      if (error instanceof Error) {
        errorMessage = error.message;
      }

      if (typeof error === "object" && error !== null && "response" in error) {
        const axiosError = error as { response?: { data?: { message?: string } } };
        errorMessage = axiosError.response?.data?.message || errorMessage;
      }

      notification.error({ message: "Login Failed", description: errorMessage });
      throw new Error(errorMessage);
    }
  },

  register: async (data: RegisterData): Promise<RegisterResponse> => {
  const response = await authApi.post<RegisterResponse>(
    endpoints.auth.register,
      data,
  );
   notification.success({ message: "Muvaffaqiyatli" });
  return response.data;
},

accept: async (data: acceptData): Promise<RegisterResponse> => {
  try {
    const response = await authApi.post<RegisterResponse>(endpoints.auth.accept, data);

    // Save access token properly
    if (response.data.access) {
      localStorage.setItem("accessToken", response.data.access);
    }

    notification.success({ message: response.data.message });
    return response.data;
  } catch (error: unknown) {
    console.error("Accept failed", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      errorMessage = axiosError.response?.data?.message || errorMessage;
    }

    notification.error({ message: "Accept Failed", description: errorMessage });
    throw new Error(errorMessage);
  }
},

  logout: (): void => {
    localStorage.removeItem("role");
    localStorage.removeItem("accessToken");
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem("accessToken");
  },

  // Immigratns

  // getImmigrants: async (filters?: Record<string,any>) => {
  //   try {
  //     let response;
      
  //     if (filters && Object.keys(filters).length > 0) {
  //       response = await authApi.get(endpoints.immigrants.get, {
  //         params: filters,
  //       });
  //     } else {
  //       response = await authApi.get(endpoints.immigrants.get);
  //     }
  
  //     return response.data;
  
  //   } catch (error: unknown) {
  //     console.error("Get failed", error);
  //     let errorMessage = "An unknown error occurred";
  //     if (error instanceof Error) {
  //       errorMessage = error.message;
  //     }
  //     if (typeof error === "object" && error !== null && "response" in error) {
  //       const axiosError = error as { response?: { data?: { message?: string } } };
  //       errorMessage = axiosError.response?.data?.message || errorMessage;
  //     }
  //     notification.error({ message: "Immigrant not found", description: errorMessage });
  //     throw new Error(errorMessage);
  //   }
  // },

  // getImmigrant: async (id: string|number|undefined) => {
  //   try {
  //     const response = await authApi.get(`${endpoints.immigrants.get}/${id}`);
  //     return response.data;
  //   } catch (error: unknown) {
  //     console.error("Get immigrant failed", error);
  //     let errorMessage = "An unknown error occurred";
  //     if (error instanceof Error) {
  //       errorMessage = error.message;
  //     }
  //     if (typeof error === "object" && error !== null && "response" in error) {
  //       const axiosError = error as { response?: { data?: { message?: string } } };
  //       errorMessage = axiosError.response?.data?.message || errorMessage;
  //     } 
  //     notification.error({ message: "Immigrant not found", description: errorMessage });
  //     throw new Error(errorMessage);
  //   }
  // },

  // User
  // getUsers: async () => {
  //   try {
  //     const response = await authApi.get(endpoints.users.me);
  //     return response.data;
  //   } catch (error: unknown) {
  //     console.error("Get failed", error);
  //     let errorMessage = "An unknown error occurred";
  //     if (error instanceof Error) {
  //       errorMessage = error.message;
  //     }
  //     if (typeof error === "object" && error !== null && "response" in error) {
  //       const axiosError = error as { response?: { data?: { message?: string } } };
  //       errorMessage = axiosError.response?.data?.message || errorMessage;
  //     } 
  //     notification.error({ message: "User not found", description: errorMessage });
  //     throw new Error(errorMessage);
  //   }
  // },

  // Helpers
  // helperBottom: async () => {
  //   try {
  //     const response = await authApi.get(endpoints.helpers.bottom);
  //     return response.data;
  //   } catch (error: unknown) {
  //     console.error("bottom stream statistics failed", error);
  //     let errorMessage = "An unknown error occurred";
  //     if (error instanceof Error) {
  //       errorMessage = error.message;
  //     }
  //     if (typeof error === "object" && error !== null && "response" in error) {
  //       const axiosError = error as { response?: { data?: { message?: string } } };
  //       errorMessage = axiosError.response?.data?.message || errorMessage;
  //     } 
  //     notification.error({ message: "Bottom stream statistics not found", description: errorMessage });
  //     throw new Error(errorMessage);
  //   }
  // },
  // helperMiddle: async () => {
  //   try {
  //     const response = await authApi.get(endpoints.helpers.middle);
  //     return response.data;
  //   } catch (error: unknown) {
  //     console.error("middle statistics failed", error);
  //     let errorMessage = "An unknown error occurred";
  //     if (error instanceof Error) {
  //       errorMessage = error.message;
  //     }
  //     if (typeof error === "object" && error !== null && "response" in error) {
  //       const axiosError = error as { response?: { data?: { message?: string } } };
  //       errorMessage = axiosError.response?.data?.message || errorMessage;
  //     } 
  //     notification.error({ message: "Middle statistics not found", description: errorMessage });
  //     throw new Error(errorMessage);
  //   }
  // },
  // helperTop: async () => {
  //   try {
  //     const response = await authApi.get(endpoints.helpers.top);
  //     return response.data;
  //   } catch (error: unknown) {
  //     console.error("top statistics failed", error);
  //     let errorMessage = "An unknown error occurred";
  //     if (error instanceof Error) {
  //       errorMessage = error.message;
  //     }
  //     if (typeof error === "object" && error !== null && "response" in error) {
  //       const axiosError = error as { response?: { data?: { message?: string } } };
  //       errorMessage = axiosError.response?.data?.message || errorMessage;
  //     } 
  //     notification.error({ message: "Top statistics not found", description: errorMessage });
  //     throw new Error(errorMessage);
  //   }
  // },
  // helperCountry: async (search?: string) => {
  //   try {
  //     const response = await authApi.get(endpoints.helpers.county, {
  //       params: { search: search },
  //     });
  //     return response.data;
  //   } catch (error: unknown) {
  //     console.error("Country stream statistics failed", error);
  //     let errorMessage = "An unknown error occurred";
  //     if (error instanceof Error) {
  //       errorMessage = error.message;
  //     }
  //     if (typeof error === "object" && error !== null && "response" in error) {
  //       const axiosError = error as { response?: { data?: { message?: string } } };
  //       errorMessage = axiosError.response?.data?.message || errorMessage;
  //     }
  //     notification.error({
  //       message: "Country stream statistics not found",
  //       description: errorMessage,
  //     });
  //     throw new Error(errorMessage);
  //   }
  // }
  
};

export default AuthService;
