import { Input, Typography } from 'antd'
import { Controller } from 'react-hook-form'

function HFPassword({
  control,
  name = '',
  disabledHelperText = false,
  required = false,
  rules = {},
  ...props
}: any): JSX.Element {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      rules={{
        required: required ? 'Это объязательная поля!' : false,
        ...rules,
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <Input.Password
            value={value}
            className="border border-[#E5E7EB] rounded-lg h-[40px] w-full px-[10px] text-[#1E1E1E] text-sm font-normal dark:bg-[#272B30] dark:border-[#272B30] dark:!text-[#FFF]"
            onChange={(e) => {
              onChange(e.target.value)
            }}
            name={name}
            error={error}
            status={error ? 'error' : 'success'}
            helperText={!disabledHelperText && (error?.message ?? ' ')}
            {...props}
          />
          {error && !disabledHelperText && (
            <Typography.Text type="danger">{error.message}</Typography.Text>
          )}
        </>
      )}
    />
  )
}

export default HFPassword
