type Props = {
  color?: string
}

export const Send: React.FC<Props> = ({ color }) => {
  return (
    <svg style={{ color }} width="24" height="24" viewBox="0 0 24 24">
      <path fill="currentColor" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
    </svg>
  )
}
