import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/stors/index.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
    <App />
    </Router>
    </Provider>
  </React.StrictMode>,
)
