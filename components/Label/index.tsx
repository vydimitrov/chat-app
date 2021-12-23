import { LabelElement, LabelText } from './styles'

type Props = {
  label: string
}

export const Label: React.FC<Props> = ({ children, label }) => {
  return (
    <LabelElement>
      <LabelText>{label}</LabelText>
      {children}
    </LabelElement>
  )
}
