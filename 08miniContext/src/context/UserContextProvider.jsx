import UserContext from './UserContext'
import  {useState} from 'react'

const UserContextProvider = ({children}) => {
    const [user,setUser] = useState(null);
    console.log(children);
    console.log(user);
  return (
    <UserContext.Provider value={{user,setUser}}>
    {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider