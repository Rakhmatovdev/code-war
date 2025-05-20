/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker, Flex, Typography } from "antd";
import dayjs from "dayjs";
import { Controller } from "react-hook-form";

function HFDatePicker({
  control,
  name = "",
  disabledHelperText = false,
  required = false,
  rules = {},
  ...props
}: {
  control: any;
  name: string;
  disabledHelperText?: boolean;
  required?: boolean;
  rules?: any;
  [x: string]: any;
}): JSX.Element {
  const convertDateStringToDayjsObject = (dateString: string): any =>
    dayjs(dateString);

  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      rules={{
        required: required ? "Это объязательная поля!" : false,
        ...rules,
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Flex vertical className="w-full">
          <DatePicker
          suffixIcon={<></>}
            value={value ? convertDateStringToDayjsObject(value) : null}
            onChange={(dates: any, dateString: string | string[]) => {
              console.log(dates);
              if (Array.isArray(dateString)) {
                onChange(dateString.join(",")); 
              } else {
                onChange(dateString);
              }
            }}
            status={error ? "error" : ("success" as any)}
            className="border border-[#E5E7EB] rounded-lg h-[40px] w-full px-[10px] text-[#1E1E1E] text-sm font-normal"
            {...props}
          />

          {error && !disabledHelperText && (
            <Typography.Text type="danger">{error.message}</Typography.Text>
          )}
        </Flex>
      )}
    />
  );
}

export default HFDatePicker;
