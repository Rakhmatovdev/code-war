import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Suspense, lazy } from "react";
import QueryProvider from "./config/providers/query.provider.tsx";
import ReduxProvider from "./config/providers/redux.provider.tsx";
import DefaultLayout from "./components/LayoutStructure/index.tsx";
import Accept from "./views/auth/Accept.tsx";
import Profile from "./views/profile/Profile.tsx";
import Reset from "./views/auth/Reset.tsx";
import EmailSend from "./views/auth/Email.tsx";

const Home       = lazy(() => import("./views/home/Home.tsx"));
const Login      = lazy(() => import("./views/auth/Login.tsx"));
const Register   = lazy(() => import("./views/auth/Register.tsx"));
const Help       = lazy(() => import("./views/help/Help.tsx"));
const About      = lazy(() => import("./views/about/About.tsx"));
const Contact    = lazy(() => import("./views/contact/Contact.tsx"));
const Invertar   = lazy(() => import("./views/invertar/Invertar.tsx"));
const MainQuest  = lazy(() => import("./views/mquest/MainQuest.tsx"));
const SideQuest  = lazy(() => import("./views/squest/SideQuest.tsx"));
const Rating     = lazy(() => import("./views/rating/Rating.tsx"));
const StartTest  = lazy(() => import("./views/start/StartTest.tsx"));
const Duel       = lazy(() => import("./views/duel/Duel.tsx"));

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const access = localStorage.getItem("accessToken");
  if (!access) return <Navigate to="/auth/login" replace />;
  return <DefaultLayout>{children}</DefaultLayout>;
};

function App() {
  const protectedRoutes = [
    { path: "/",        element: <Home /> },
    { path: "/about",   element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/duel",    element: <Duel /> },
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
                <Route path="login" element={<Login />} />
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
