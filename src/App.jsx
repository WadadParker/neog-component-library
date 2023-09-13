import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'

import { Home } from './pages/home/Home'
import { SideBar } from './mainComponents/sideBar/SideBar'
import { Components } from './pages/library/Components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <SideBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/components' element={<Components />} />
      </Routes>
    </div>
  )
}

export default App
