import React from 'react'
import { Provider } from 'react-redux'
import Store from './config/Store'
import { ToastContainer } from 'react-toastify';

import Routing from './routing/Routing'
import 'react-toastify/dist/ReactToastify.css';

import './App.css'


export default function App() {
  
  return (
    <Provider store={Store}>
      <Routing/>
      <ToastContainer />
    </Provider>
  )
}
