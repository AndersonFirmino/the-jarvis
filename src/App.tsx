import { MuiThemeProvider } from '@material-ui/core'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routes from 'src/routes'
import theme from 'src/styles/theme'

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
    </MuiThemeProvider>
  )
}

export default App
