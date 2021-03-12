import React from 'react'
import ReactDOM from 'react-dom'
import {ToastProvider} from 'react-toast-notifications'
import {BrowserRouter as Router} from 'react-router-dom'
import {BarProvider} from './hooks/BarProvider'
import {APIProvider} from './hooks/APIProvider'
import {TemaProvider} from './hooks/TemaProvider'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <ToastProvider autoDismiss={true} autoDismissTimeout={2500}>
    <BarProvider>
      <APIProvider>
        <TemaProvider>
          <Router>
            <App />
          </Router>
        </TemaProvider>
      </APIProvider>
    </BarProvider>
  </ToastProvider>,
  document.getElementById('root')
)

registerServiceWorker()