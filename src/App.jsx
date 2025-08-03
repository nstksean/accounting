import React, { createContext, useState, useContext } from 'react'
import Overview from './page/Overview'
import { AppTodayProvider } from './context/TodayContext'

import './App.css'

function App() {

  return (
    <AppTodayProvider>
      <Overview />
    </AppTodayProvider>
  )
}

export default App
