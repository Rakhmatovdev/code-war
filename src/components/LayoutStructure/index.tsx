import { Flex } from "antd";
import Header from "./Header";
import Footer from "./Footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Flex>
      <Flex vertical className="w-full">
        <Header />
        {children}
        <Footer/>
      </Flex>
    </Flex>
  );
}
