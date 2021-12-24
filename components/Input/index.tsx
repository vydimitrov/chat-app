import { InputElement } from './styles'

type Props = {
  onChange: (value: string) => void
  value?: string
  placeholder?: string
  required?: boolean
}

export const Input: React.FC<Props> = ({
  value,
  onChange,
  placeholder,
  required,
}) => {
  return (
    <InputElement
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
    />
  )
}
