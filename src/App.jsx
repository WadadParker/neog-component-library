import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'

import { Home } from './pages/home/Home'
import { SideBar } from './mainComponents/sideBar/SideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <SideBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
