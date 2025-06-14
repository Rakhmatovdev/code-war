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


export interface contentResponse {
  id: number | string;
  title: string;
  text: string;
  image: string;
  content_type: string
  likes: number;
  views: number;
}

export interface createResponse{
  id: number | string;
  user_full_name: string;
  user_profile_image: string;
  text: string;
  created_at: string;
}

interface commentResult{
   id: number | string;
  user_full_name: string;
  user_profile_image: string;
  text: string;
  created_at: string;
  likes: number;
  views: number;
}

export interface commentResponse{
  count: number;
next: string | null;
previous: null | string;
results: commentResult[] | null;
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

export interface characterData{
  id: number | string;
  name: string;
  title: string;
  image: string;
}

interface assigment{
  id: number | string;
  task_description: string;
 expected_output: string;
}

export interface getTopicsResponse {
  id: number | string;
  title: string;
  video_url?: string;
  order?: number;
 plans: [
  {
    id: number;
    title: string;
    text?: string;
    code_examples?: [
      {
        id?: number | string;
        code?: string;
      }
    ];
   assignments?: assigment[];
  }
 ];
}

interface ansver{
  ansver_id: number | string;
}
export interface getIninitialTestsData {
answers:ansver[];
}

interface caracterResponse{
  id: number | string;
  name: string;
  title: string;
  image: string;
}

export interface AssignmentResponse{
  id: number | string;
  plan_title: string;
  title: string;
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
    try {
  const response = await authApi.post<RegisterResponse>(
    endpoints.auth.register,
      data,
  );
   notification.success({ message: "Muvaffaqiyatli" });
  return response.data;
    } catch (error: unknown) {
      console.error("Registration failed", error);
      let errorMessage = "An unknown error occurred";
      if (error instanceof Error) {
        errorMessage = error.message;
      }

      if (typeof error === "object" && error !== null && "response" in error) {
        const axiosError = error as { response?: { data?: { message?: string } } };
        errorMessage = axiosError.response?.data?.message || errorMessage;
      }

      notification.error({ message: "Foydalanuvchi allaqachon mavjud.", description: errorMessage });
      throw new Error(errorMessage);
    }
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

  // getContent

 getContent: async (content_type: string): Promise<contentResponse[]> => {
  try {
    const response = await authApi.get<contentResponse[]>(endpoints.content, {
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
    console.error("Oldingi parol noto‘g‘ri", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      errorMessage = axiosError.response?.data?.message || errorMessage;
    }

    notification.error({ message: "Oldingi parol noto‘g‘ri" });
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

getTopics: async (): Promise<any>  => {
  try {
    const response = await authApi.get<any>(endpoints.topics.getTopics);        
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
    const response = await authApi.get<getTopicsResponse>(`${endpoints.topics.base}${id}/plans/`);
    return response.data;
  } catch (error: unknown) {
    console.error("Get topics by ID failed", error);

     const axiosError = error as {
        response?: { status?: number; data?: { message?: string } };
      };
      const status = axiosError.response?.status;

 if (status === 403) {
        notification.warning({
          message: 'Oldin masalani tugating',
        });
        throw new Error('Oldin masalani tugating');
      }

    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      errorMessage = axiosError.response?.data?.message || errorMessage;  
    }

    notification.error({ message: "Masol topilmadi.", description: errorMessage });
    throw new Error(errorMessage);
  }
},

postTopics: async (id: string | number | undefined): Promise<getTopicsResponse> => {
  try {
    const response = await authApi.post<getTopicsResponse>(`${endpoints.topics.base}${id}${endpoints.topics.completeTopic}`);    
    notification.success({ message: response?.data?.title || "Misol muvaffaqiyatli yakunlandi" });
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
getComments: async (page:{page:number | string,page_size: number}): Promise<commentResponse> => {
  try {
    const response = await authApi.get<commentResponse>(endpoints.comments.get, {
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
},

//contact
createContact: async (data: { full_name: string; email: string; phone_number: string; message: string }): Promise<any> => {
  try {
    const response = await authApi.post(endpoints.contact, data);
    notification.success({ message: "Contact muvaffaqiyatli jo'natildi" });
    return response.data;
  } catch (error: unknown) {
    console.error("Create yaratishda muammo", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      errorMessage = axiosError.response?.data?.message || errorMessage;
    }
    notification.error({ message: "Create yaratishda muammo", description: errorMessage });
    throw new Error(errorMessage);
  }
},

//asignments

getAssignments: async (): Promise<AssignmentResponse[]> => {
  try {
    const response = await authApi.get<AssignmentResponse[]>(endpoints.assignments.base);
    return response.data;
  } catch (error: unknown) {
    console.error("Get assignments failed", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }   
    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      errorMessage = axiosError.response?.data?.message || errorMessage;
    }
    notification.error({ message: "Assignments not found", description: errorMessage });
    throw new Error(errorMessage);
  }
},

getAssignmentById: async (id: string | number): Promise<any> => {
  try {
    const response = await authApi.get<any>(`${endpoints.assignments.base}${id}/`);
    return response.data;
  } catch (error: unknown) {
    console.error("Get assignment by ID failed", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      errorMessage = axiosError.response?.data?.message || errorMessage;
    }
    notification.error({ message: "Assignment not found", description: errorMessage });
    throw new Error(errorMessage);
  }
},

postAssignment: async (id: string | number, code: string) => {
  try {
    const response = await authApi.post(`${endpoints.assignments.base}${id}${endpoints.assignments.submit}`, {code});
    notification.success({ message: "Assignment submitted successfully" });
    return response.data;
  } catch (error: unknown) {
    console.error("Post assignment failed", error);
    let errorMessage = "An unknown error occurred";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      errorMessage = axiosError.response?.data?.message || errorMessage;
    }

    notification.error({ message: "Post Assignment Failed", description: errorMessage });
    throw new Error(errorMessage);
  }
},

// characters

getCharacters: async (): Promise<caracterResponse[]> => {
  try {
    const response = await authApi.get<caracterResponse[]>(endpoints.characters);
    return response.data;
  } catch (error: unknown) {
    console.error("Get characters failed", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      errorMessage = axiosError.response?.data?.message || errorMessage;
    }
    notification.error({ message: "Characters not found", description: errorMessage });
    throw new Error(errorMessage);
  } 

},

//rating
getRating: async (): Promise<any> => {
  try {
    const response = await authApi.get(endpoints.rating);
    return response.data;
  } catch (error: unknown) {
    console.error("Get rating failed", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      errorMessage = axiosError.response?.data?.message || errorMessage;
    }
    notification.error({ message: "Rating not found", description: errorMessage });
    throw new Error(errorMessage);
  }
},

// duel

getDuels: async (): Promise<any> => {
  try {
    const response = await authApi.get(endpoints.duel.available);
    return response.data;
  } catch (error: unknown) {
    console.error("Get duels failed", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      errorMessage = axiosError.response?.data?.message || errorMessage;
    }
    notification.error({ message: "Duels not found", description: errorMessage });
    throw new Error(errorMessage);
  }
},

createDuel: async (): Promise<any> => {
  try {
    const response = await authApi.post(endpoints.duel.post);
    notification.success({ message: "Duelga muvaffaqiyatli chaqirildi !" });
    return response.data;
  } catch (error: unknown) {
    console.error("Create duel failed", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      errorMessage = axiosError.response?.data?.message || errorMessage;
    }
    notification.error({ message: "Create Duel Failed", description: errorMessage });
    throw new Error(errorMessage);
  }
},

getAssignmentsByDuelId: async (duelId: number | string): Promise<any> => {
  try {
    const response = await authApi.get(`${endpoints.duel.base}${duelId}${endpoints.duel.assignments}`);
    return response.data;
  } catch (error: unknown) {
    console.error("Get assignments by duel ID failed", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      errorMessage = axiosError.response?.data?.message || errorMessage;
    }
    notification.error({ message: "Assignments not found", description: errorMessage });
    throw new Error(errorMessage);
  }
},

joinDuel: async (duelId: number | string): Promise<any> => {
  try {
    const response = await authApi.post(`${endpoints.duel.base}${duelId}${endpoints.duel.join}`);
    notification.success({ message: response.data.message || "Duelga muvaffaqiyatli qo'shildingiz!" });
    return response.data;
  } catch (error: unknown) {
    console.error("Join duel failed", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      errorMessage = axiosError.response?.data?.message || errorMessage;
    }
    notification.error({ message: "O'zingiz yaratgan duelga qo‘shila olmaysiz."});
    throw new Error(errorMessage);
  }
},

submitDuel: async (duelId: number | string, data: { assignmentId: number | string, code: string }): Promise<any> => {
  try {
    const response = await authApi.post(`${endpoints.duel.base}${duelId}${endpoints.duel.submit}`, data);
    notification.success({ message: "Duel submitted successfully" });
    return response.data;
  } catch (error: unknown) {
    console.error("Submit duel failed", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      errorMessage = axiosError.response?.data?.message || errorMessage;
    }
    notification.error({ message: "Submit Duel Failed", description: errorMessage });
    throw new Error(errorMessage);
  }
},


//initial tests

getInitialTests: async (): Promise<any> => {
  try {
    const response = await authApi.get<any>(endpoints.initialtest.base);
    return response.data;
  } catch (error: unknown) {
    console.error("Get initial tests failed", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      errorMessage = axiosError.response?.data?.message || errorMessage;
    }
    notification.error({ message: "Initial tests not found", description: errorMessage });
    throw new Error(errorMessage);
  }
},

submitInitialTest: async (data:getIninitialTestsData): Promise<any> => {
  try {
    const response = await authApi.post(endpoints.initialtest.submit, data);
    notification.success({ message: "Initial test submitted successfully" });
    return response.data;
  } catch (error: unknown) {
    console.error("Submit initial test failed", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      errorMessage = axiosError.response?.data?.message || errorMessage;
    }
    notification.error({ message: "Submit Initial Test Failed", description: errorMessage });
    throw new Error(errorMessage);
  }
}
,
//choice
getChoice: async (): Promise<any>=> {
  try {
    const response = await authApi.get<any>(endpoints.choices);
    return response.data;
  } catch (error: unknown) {
    console.error("Get choice failed", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      errorMessage = axiosError.response?.data?.message || errorMessage;
    }
    notification.error({ message: "Choice not found", description: errorMessage });
    throw new Error(errorMessage);
  }
}
,

// plans

getPlans: async (topicId: string | number): Promise<any> => {
  try {
    const response = await authApi.get<any>(`${endpoints.plans}${topicId}/`);
    return response.data;
  } catch (error: unknown) {
    console.error("Get plans failed", error);
    let errorMessage = "An unknown error occurred";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    if (typeof error === "object" && error !== null && "response" in error) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      errorMessage = axiosError.response?.data?.message || errorMessage;
    }
    notification.error({ message: "Plans not found", description: errorMessage });
    throw new Error(errorMessage);
  }
  }

};

export default AuthService;
