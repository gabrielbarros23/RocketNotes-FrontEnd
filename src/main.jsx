import React from 'react'
import ReactDOM from 'react-dom/client'
import {Routes} from './Routes'
import {AuthProvider} from './hooks/auth'
import { ThemeProvider } from 'styled-components'
import  GlobalStyle  from './styles/global'
import  theme  from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
