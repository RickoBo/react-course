import UserContext from '../context/UserContext'
import { useContext } from 'react'
const ChangeUser = () => {
  const { user, setUser } = useContext(UserContext)
  return (
    <button onClick={() => setUser(user === 'Ingvar' ? 'Alice' : 'Ingvar')}>
      Change User
    </button>
  )
}

export default ChangeUser
