import { useState, useEffect, createContext } from 'react'

const UserContext = createContext()

const UserProvider = ({children}) => {

  const [userData, setUserData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/users")
     .then(res => res.json())
     .then(setUserData)
     .catch(err => alert(err))
  }, []);

    return (
        <UserContext.Provider value={{userData, setUserData}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }