import { Outlet } from 'react-router-dom'
import { Header } from '../../componetes/Header'
import { LayoutContainer } from './styles'

export function DefaultLayouts() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
