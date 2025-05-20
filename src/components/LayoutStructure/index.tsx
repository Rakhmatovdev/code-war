import { Flex } from "antd";
import Header from "./Header";

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
      </Flex>
    </Flex>
  );
}
