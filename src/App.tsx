import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Suspense} from "react";
import QueryProvider from "./config/providers/query.provider.tsx";
import ReduxProvider from "./config/providers/redux.provider.tsx";
import DefaultLayout from "./components/LayoutStructure/index.tsx";
import Accept from "./views/auth/Accept.tsx";
import Profile from "./views/profile/Profile.tsx";
import Reset from "./views/auth/Reset.tsx";
import EmailSend from "./views/auth/Email.tsx";
import Home from "./views/home/Home.tsx";
import About from "./views/about/About.tsx";
import Contact from "./views/contact/Contact.tsx";
import Duel from "./views/duel/Duel.tsx";
import Invertar from "./views/invertar/Invertar.tsx";
import MainQuest from "./views/mquest/MainQuest.tsx";
import SideQuest from "./views/squest/SideQuest.tsx";
import Rating from "./views/rating/Rating.tsx";
import Login from "./views/auth/Login.tsx";
import Register from "./views/auth/Register.tsx";
import StartTest from "./views/start/StartTest.tsx";
import Help from "./views/help/Help.tsx";



const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const access = localStorage.getItem("accessToken");
  if (!access) return <Navigate to="/auth/login" replace/>;
  return <DefaultLayout>{children}</DefaultLayout>;
};

function App() {
  const protectedRoutes = [
    { path: "/",        element: <Home /> },
    { path: "/about",   element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/duel",    element: <Duel/> },
    { path: "/invertar",element: <Invertar /> },
    { path: "/mquest",  element: <MainQuest /> },
    { path: "/squest",  element: <SideQuest /> },
    { path: "/rating",  element: <Rating /> },
    { path: "/profile", element: <Profile/> },
  ];

  return (
    <QueryProvider>
      <ReduxProvider>
        <BrowserRouter> 
          <Suspense fallback={<div className="text-center p-8 bg-gray-800 h-screen w-screen"/>}>
            <Routes>
              <Route path="/auth">
                <Route path="login" element={<Login/>} />
                <Route path="register" element={<Register />} />
                <Route path="accept" element={<Accept />} />
                <Route path="start" element= {<StartTest />}/> ,    
                <Route path="reset" element= {<Reset/>}/> ,    
                <Route path="email" element= {<EmailSend/>}/> ,    
              </Route>
              {protectedRoutes.map(({ path, element }) => (
                <Route
                  key={path}
                  path={path}
                  element={<AuthGuard>{element}</AuthGuard>}
                />
              ))}           
              <Route path="/help" element={<Help />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ReduxProvider>
    </QueryProvider>
  );
}

export default App;
