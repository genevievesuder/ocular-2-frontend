import { createContext, useState, useEffect } from "react";

const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("/authorized_user")
        .then((res) => {
            if (res.ok) {
                res.json()
                .then((user) => {
                    setUser(user);
                });
            } else {
                res.json()
                .then((errorObj) => alert(errorObj.errors))
            }
        })
    }, []);
    
    const handleLogin = (e, formData) => {
        e.preventDefault()
        console.log(formData)
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        })
        .then(resp => {
          if (resp.ok) {
            resp.json().then(userObj => {
              setUser(userObj)
              alert("User successfully logged in!")
            })
          } else {
            resp.json().then(messageObj => alert(messageObj.error))
          }
        })
    }

   

    return (
        <UserContext.Provider value={{user, setUser, handleLogin}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}