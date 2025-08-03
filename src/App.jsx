import React, { createContext, useState, useContext } from 'react'
import Overview from './page/Overview'
import { AppTodayProvider } from './context/TodayContext'
import { TransactionsProvider } from './context/TransactionsContext'
import './App.css'

function App() {

  return (
    <AppTodayProvider>
      <TransactionsProvider>
        <Overview />
      </TransactionsProvider>
    </AppTodayProvider>
  )
}

export default App
