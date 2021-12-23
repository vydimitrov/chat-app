import { ButtonElement } from './styles'

export const Button: React.FC = ({ children }) => {
  return <ButtonElement type="submit">{children}</ButtonElement>
}
