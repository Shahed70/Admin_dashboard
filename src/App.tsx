import React, { createContext, useState } from 'react'
import Dashboard from './components/Dashboard/Dashboard'


const App = () => {
  const [route, setRoute] = useState<any>('/home')
  const headerContent = () => {
    let adminRoute;
    switch (route) {
      case "/home":
        return adminRoute = 'Home Component';
      case '/work':
        return adminRoute = 'Work Component'
      default:
        return adminRoute = 'Home component'
    }
  }

  return (
      <div>
        <Dashboard headerContent={headerContent} />
      </div>
  )
}

export default App
