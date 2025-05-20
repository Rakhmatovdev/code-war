import { Select, Typography } from "antd";
import { Controller } from "react-hook-form";
import "./style.css";

function HFSelect({
  control,
  name,
  width = "100%",
  options = [],
  disabledHelperText,
  placeholder,
  required = false,
  rules = {},
  defaultValue = undefined,
  ...props
}: any): JSX.Element {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue || (props.labelInValue ? null : "")}
      rules={{
        required: required ? "Это объязательная поля!" : false,
        ...rules,
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <Select
            {...props}
            value={value}
            style={{
              width,
              borderRadius: "8px",
              border: error ? "1px solid #ff4d4f" : "1px solid #E5E7EB",
              color: "#1E1E1E",
            }}
            className="h-[40px] w-full !text-[#1E1E1E] text-sm font-normal"
            status={error ? "error" : undefined}
            onChange={(val) => {
             
              if (props.labelInValue) {
                onChange(val); 
              } else {
                onChange(val); 
              }
            }}
            options={options}
            placeholder={placeholder}
          />

          {error && !disabledHelperText && (
            <Typography.Text type="danger">{error.message}</Typography.Text>
          )}
        </>
      )}
    />
  );
}

export default HFSelect;
