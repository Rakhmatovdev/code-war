import { Flex } from "antd";

function FRow({
  label,
  children,
  position = "vertical",
  required,
}: {
  label: string;
  children: JSX.Element;
  position?: "vertical" | "horizontal";
  required?: boolean;
}): JSX.Element {
  return (
    <Flex className="w-full" vertical={position === "vertical"}>
      <Flex className="text-[#1E1E1E] text-sm font-medium mb-[10px]">
        {required && <span className="!text-[#CE5A67]">*</span>} {label}{" "}
        {label.length > 0 && ":"}{" "}
      </Flex>
      <div className="component w-full">{children}</div>
    </Flex>
  );
}

export default FRow;
