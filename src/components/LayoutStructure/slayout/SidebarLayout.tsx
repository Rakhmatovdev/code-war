import { useLocation } from "react-router";
import { Flex } from "antd";

import Sidebar from "./Sidebar";
import Header from "../Header";
import Footer from "../Footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const location = useLocation();
  const isMquestRoute = location.pathname.startsWith("/mquest");

  return (
    <Flex>
      {isMquestRoute && <Sidebar />}
      <Flex vertical className="w-full">
        <Header/>
        {children}
        <Footer/>
      </Flex>
    </Flex>
  );
}
