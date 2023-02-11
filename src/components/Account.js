import Login from "./Login"
import Signup from "./Signup"
import UserHome from "./UserHome"
import {useState} from 'react'

const Account = ({user, setUser}) => {
  const [toggleAuth, setToggleAuth] = useState(false)

  if (!user) {
    return (
      toggleAuth && <Login setUser={setUser} setToggleAuth={setToggleAuth}/>) || (<Signup setUser={setUser} setToggleAuth={setToggleAuth}/>)
  }

  return (
    <div>
        <UserHome user={user} setUser={setUser}/>
    </div>
  )
}
  
export default Account;