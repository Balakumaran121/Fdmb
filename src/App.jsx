import React from 'react'
import Router from './router'
import { persistor } from './redux/store'
persistor.purge()
const App = () => {
  return (
    <div className="">
      <Router />
    </div>
  )
}

export default App
