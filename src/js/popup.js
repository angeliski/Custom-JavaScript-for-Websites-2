import 'chrome-extension-async'
import 'typeface-roboto'
import React from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import { render } from 'react-dom'
import { Provider } from 'mobx-react'
import App from 'components/App'
import Store from 'stores'

const store = new Store()
const theme = createMuiTheme({
  'typography': {
    'button': {
      'textTransform': 'none'
    }
  }
})

const initApp = () => {
  render(
    <Provider {...store}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')
  )
}

initApp()
