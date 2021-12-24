import { ButtonElement } from './styles'
import { Props } from './types'

export const Button: React.FC<Props> = ({ children, variant = 'primary' }) => {
  return (
    <ButtonElement variant={variant} type="submit">
      {children}
    </ButtonElement>
  )
}
