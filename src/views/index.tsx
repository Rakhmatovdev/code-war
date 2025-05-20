import { Flex } from "antd";
import React from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Flex>
      <Flex vertical className="w-full"> 
        {children}
      </Flex>
    </Flex>
  );
}
