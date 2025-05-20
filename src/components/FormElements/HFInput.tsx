
import { Input, Typography } from "antd";
import { Controller } from "react-hook-form";

function HFInput({
  control,
  name = "",
  disabledHelperText = false,
  required = false,
  rules = {},
  swsws, // bu DOMga tushmasin
  ...rest
}: {
  control: any;
  name: string;
  disabledHelperText?: boolean;
  required?: boolean;
  rules?: any;
  swsws?: any;
  [x: string]: any;
}): JSX.Element {
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
        <>
          <Input
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
            }}
            status={error ? "error" : ("success" as any)}
            className="border border-[#E5E7EB] rounded-lg h-[40px] w-full px-[10px] text-[#1E1E1E] text-sm font-normal shadow-sm"
            {...rest}
          />
          {error && !disabledHelperText && (
            <Typography.Text type="danger">{error.message}</Typography.Text>
          )}
        </>
      )}
    />
  );
}

export default HFInput;
