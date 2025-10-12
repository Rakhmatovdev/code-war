import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { lazy } from "react";

import QueryProvider from "./config/providers/query.provider.tsx";
import ReduxProvider from "./config/providers/redux.provider.tsx";
import SidebarLayout from "./components/LayoutStructure/slayout/SidebarLayout.tsx";

// Auth views
import Accept from "./views/auth/Accept.tsx";
import Reset from "./views/auth/Reset.tsx";
import EmailSend from "./views/auth/Email.tsx";
import Login from "./views/auth/Login.tsx";
import Register from "./views/auth/Register.tsx";
import StartTest from "./views/start/StartTest.tsx";

// Lazy views
const Home = lazy(() => import("./views/home/Home.tsx"));
const About = lazy(() => import("./views/about/About.tsx"));
const Contact = lazy(() => import("./views/contact/Contact.tsx"));
const Duel = lazy(() => import("./views/duel/Duel.tsx"));
const DuelStart = lazy(() => import("./views/duel/DuelStart.tsx"));
const MainQuest = lazy(() => import("./views/mquest/MainQuest.tsx"));
const Plan = lazy(() => import("./views/mquest/Plan.tsx"));
const SideQuest = lazy(() => import("./views/squest/SideQuest.tsx"));
const SQDetail = lazy(() => import("./views/squest/DetailQuest.tsx"));
const Rating = lazy(() => import("./views/rating/Rating.tsx"));
const Invertar = lazy(() => import("./views/invertar/Invertar.tsx"));
const Profile = lazy(() => import("./views/profile/Profile.tsx"));
const Help = lazy(() => import("./views/help/Help.tsx"));

// Auth guard
const AuthGuard = ({ children }: { children: React.ReactNode }) => {
    const token = localStorage.getItem("accessToken");
    return token ? <SidebarLayout>{children}</SidebarLayout> : <Navigate to="/auth/login" replace />;
};

// Protected routes
const protectedRoutes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/duel", element: <Duel /> },
    { path: "/duel/:id", element: <DuelStart /> },
    { path: "/mquest", element: <MainQuest /> },
    { path: "/mquest/:id/plan/:pid", element: <Plan /> },
    { path: "/squest", element: <SideQuest /> },
    { path: "/squest/:id", element: <SQDetail /> },
    { path: "/rating", element: <Rating /> },
    { path: "/rating/:id", element: <Invertar /> },
    { path: "/profile", element: <Profile /> },
    { path: "/help", element: <Help /> },
];

function App() {
    return (
        <QueryProvider>
            <ReduxProvider>
                <BrowserRouter>

                        <Routes>
                            {/* Auth routes */}
                            <Route path="/auth">
                                <Route path="login" element={<Login />} />
                                <Route path="register" element={<Register />} />
                                <Route path="accept" element={<Accept />} />
                                <Route path="start" element={<StartTest />} />
                                <Route path="reset" element={<Reset />} />
                                <Route path="email" element={<EmailSend />} />
                            </Route>

                            {/* Protected routes */}
                            {protectedRoutes.map(({ path, element }) => (
                                <Route key={path} path={path} element={<AuthGuard>{element}</AuthGuard>} />
                            ))}

                            {/* Fallback */}
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Routes>

                </BrowserRouter>
            </ReduxProvider>
        </QueryProvider>
    );
}

export default App;
