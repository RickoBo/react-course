import User from './components/User'
import UserContext from './context/UserContext'
import { useState } from 'react'
import ChangeUser from './components/ChangeUser'
import './App.css'

function App() {
  const [user, setUser] = useState('Ingvar')
  return (
    <UserContext.Provider value={{ userName: user, changeUserName: setUser }}>
      <div className="App">
        <User />
        <ChangeUser />
      </div>
    </UserContext.Provider>
  )
}

export default App
