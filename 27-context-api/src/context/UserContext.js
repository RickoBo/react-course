import { createContext } from 'react'

const UserContext = createContext({
  userName: '',
  chaneUserName: () => {},
})

export default UserContext
