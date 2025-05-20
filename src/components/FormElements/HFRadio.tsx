import { Radio } from 'antd'
import { Controller } from 'react-hook-form'
import './style.css'

function HFRadio({
  control,
  name,
  label,
  width = '100%',
  options = [],
  disabledHelperText,
  placeholder,
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
        required: required ? 'This is required field' : false,
        ...rules,
      }}
      render={({ field: { onChange, value },  }) => ( //fieldState: { error }
        <Radio {...props} value={value} onChange={onChange}>
          {label}
        </Radio>
      )}
    />
  )
}

export default HFRadio
