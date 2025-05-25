import { notification } from "antd";
import authApi, { endpoints } from "../axios";
interface LoginData {
  email: string;
  password: string;
}

interface LoginResponse {
  access: string;
}

interface RegisterData {
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

interface RegisterResponse {
  message: string;
  access: string; 
}

export interface commentResponse{
  id: number | string;
  title: string;
  text: string;
  image: string;
  content_type: string;
}

export interface createResponse{
  id: number | string;
  user_full_name: string;
  user_profile_image: string;
  text: string;
  created_at: string;
}

export interface commentResponse{
  id: number | string;
  user_full_name: string;
  user_profile_image: string;
  text: string;
  created_at: string;
}
export interface commentResponse{
  page: number |string;
  page_size: number;
}

 interface acceptData {
  email: string;
  code: string;
}
 export interface acceptResponse {
  message: string;
  access: string;
}
interface profileUpdareData {
  username: string;
  first_name: string;
  last_name: string;
  otm: string;
  course: number;
  group: string;
  direction: string;
  role:'talaba' | 'oqituvchi' ;
}

interface ChangePasswordData {
  old_password: string;
  new_password: string;
  confirm_password: string;
}

 interface resetPasswordData {
  email: string;
  code: string;
  new_password: string;
  confirm_password: string;
}


export interface forgotData {
  email: string;
}

export interface getTopicsResponse {
  id: number | string;
  title: string;
  video_url?: string;
  order?: number;
 plans: [
  {
    id: number | string;
    title: string;
    text?: string;
    code_examples?: [
      {
        id?: number | string;
        code?: string;
      }
    ];
    assigments?: [
      {
        id?: number | string;
        task_description?: string;
        sample_solution?: string;
      }
    ];
  }
 ];
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
    window.location.href = "/auth/login";
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem("accessToken");
  },


 getContent: async (content_type: string): Promise<RegisterResponse> => {
  try {
    const response = await authApi.get<RegisterResponse>(endpoints.content, {
      params: { content_type },
    });
    return response.data;
  } catch (error: unknown) {
    console.error("Get failed", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      errorMessage = axiosError.response?.data?.message || errorMessage;
    }
    notification.error({ message: "Content not found", description: errorMessage });
    throw new Error(errorMessage);
  }
},


forgotPassword: async (data: forgotData): Promise<RegisterResponse> => {
  try {
    const response = await authApi.post<RegisterResponse>(endpoints.forgotpassword, data);

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

    notification.error({ message: "Forgot Failed", description: errorMessage });
    throw new Error(errorMessage);
  }
},

//profile
getProfile: async () => {
  try {
    const response = await authApi.get(`${endpoints.profile.getProfile}`);
    return response.data;
  } catch (error: unknown) {
    console.error("Get profile failed", error);       
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      errorMessage = axiosError.response?.data?.message || errorMessage;
    }
    notification.error({ message: "Profile not found", description: errorMessage });
    throw new Error(errorMessage);
  }
},

changePassword: async (data: ChangePasswordData) => {
  try {
    const response = await authApi.post(endpoints.profile.changePassword, data);

    notification.success({ message: response.data.message });
    return response.data;
  }
  catch (error: unknown) {
    console.error("Change password failed", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      errorMessage = axiosError.response?.data?.message || errorMessage;
    }

    notification.error({ message: "Change Password Failed", description: errorMessage });
    throw new Error(errorMessage);
  }
},

updateProfile: async (data: profileUpdareData) => {
  try {
    const response = await authApi.patch(endpoints.profile.updateProfile, data);

    notification.success({ message: response.data.message });
    return response.data;
  } catch (error: unknown) {
    console.error("Update profile failed", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      errorMessage = axiosError.response?.data?.message || errorMessage;
    }
    notification.error({ message: "Update Profile Failed", description: errorMessage });
    throw new Error(errorMessage);
  }
},

resetPassword: async (data: resetPasswordData): Promise<RegisterResponse> =>{
  try {
    const response = await authApi.post<RegisterResponse>(endpoints.resetpassword, data);
    notification.success({ message: response.data.message });
    return response.data;
  } catch (error: unknown) {
    console.error("Reset password failed", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      errorMessage = axiosError.response?.data?.message || errorMessage;
    }
    notification.error({ message: "Reset Password Failed", description: errorMessage });
    throw new Error(errorMessage);
  }
},

//topics

getTopics: async (): Promise<getTopicsResponse>  => {
  try {
    const response = await authApi.get<getTopicsResponse>(endpoints.topics.getTopics);        
    return response.data;
  }
  catch (error: unknown) {
    console.error("Get topics failed", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      errorMessage = axiosError.response?.data?.message || errorMessage;
    }
    notification.error({ message: "Topics not found", description: errorMessage });
    throw new Error(errorMessage);
  }
},

getTopicsById: async (id: string | number | undefined): Promise<getTopicsResponse> => {
  try {
    const response = await authApi.get<getTopicsResponse>(`${endpoints.topics.base}${id}/`);
    return response.data;
  } catch (error: unknown) {
    console.error("Get topics by ID failed", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      errorMessage = axiosError.response?.data?.message || errorMessage;  
    }
    notification.error({ message: "Topics not found", description: errorMessage });
    throw new Error(errorMessage);
  }
},

postTopics: async (id: string | number | undefined): Promise<getTopicsResponse> => {
  try {
    const response = await authApi.post<getTopicsResponse>(`${endpoints.topics.base}${id}${endpoints.topics.completeTopic}`);    
    notification.success({ message: response?.data?.title || "Topic completed successfully" });
    return response.data;
  }
  catch (error: unknown) {
    console.error("Post topics failed", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      errorMessage = axiosError.response?.data?.message || errorMessage;
    }
    notification.error({ message: "Post Topics Failed", description: errorMessage });
    throw new Error(errorMessage);
  }
},

//comments
getComments: async (page:{page:number | string,page_size: number}): Promise<commentResponse[]> => {
  try {
    const response = await authApi.get<commentResponse[]>(endpoints.comments.get, {
      params:page,
    });
    return response.data;
  } catch (error: unknown) {
    console.error("Get comments failed", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      errorMessage = axiosError.response?.data?.message || errorMessage;
    }
    notification.error({ message: "Comments not found", description: errorMessage });
    throw new Error(errorMessage);
  }
},
createComment: async ( text: string): Promise<createResponse> => {
  try {
    const response = await authApi.post<createResponse>(endpoints.comments.create, text);
    notification.success({ message: "Comment created successfully" });
    return response.data;
  } catch (error: unknown) {
    console.error("Create comment failed", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      errorMessage = axiosError.response?.data?.message || errorMessage;
    }
    notification.error({ message: "Create Comment Failed", description: errorMessage });
    throw new Error(errorMessage);
  }
}



};

export default AuthService;
