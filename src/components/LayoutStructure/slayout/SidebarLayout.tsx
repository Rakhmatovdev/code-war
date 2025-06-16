import { useLocation } from "react-router";
import { Flex } from "antd";

import Sidebar from "./Sidebar";
import Header from "../Header";
import Footer from "../Footer";
import SidebarSQ from "./SidebarSQ";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const location = useLocation();
  const isMquestRoute = location.pathname.startsWith("/mquest");
  const isSquestRoute = location.pathname.startsWith("/squest");

  return (
    <Flex>
      {isMquestRoute && <Sidebar />}
      {isSquestRoute && <SidebarSQ />}
      <Flex vertical className="w-full">
        <Header/>
        {children}
        <Footer/>
      </Flex>
    </Flex>
  );
}
