import { CabecalhoHeader } from './styles'

export type Props = {
  children: React.ReactNode
}

const Cabecalho = ({ children }: Props) => (
  <CabecalhoHeader>{children}</CabecalhoHeader>
)

export default Cabecalho
