import Login from "./Login"
import Signup from "./Signup"
import UserHome from "./UserHome"
import {useState, useContext} from 'react';
import { UserContext } from '../context/UserContext';

const Account = () => {
  const [toggleAuth, setToggleAuth] = useState(false)
  const {user, setUser} = useContext(UserContext)

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