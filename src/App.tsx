/* eslint-disable prettier/prettier */
import { ThemeProvider } from 'styled-components'

import {BrowserRouter} from 'react-router-dom'
import { GlobalStyle } from './componetes/styles/themes/global'
import { defaultTheme } from './componetes/styles/themes/default'
import { Routei } from './Route'
import { CyclesContextProvider } from './contexts/CyclesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <CyclesContextProvider>
      <Routei/>
      </CyclesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
