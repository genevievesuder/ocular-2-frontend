import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const UserContext = createContext()

const UserProvider = ({children}) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null);


  useEffect(() => {
      fetch("/authorized_user")
      .then((res) => {
          if (res.ok) {
              res.json()
              .then((user) => {
                  setUser(user);
              });
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

  const handleLogout = () => {
  fetch("/logout", {
    method: "DELETE",
  })
    .then((r) => { 
      if (r.status === 204) {
        setUser(null)
        alert("Successfully logged out!")
        navigate("/")
      } else {
        r.json()
        .then(err => alert(err))
      }        
    }) 
  }

  const handleSignup = (e, formData) => {
    e.preventDefault()
    console.log(formData)
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
        .then(response => {
        if (response.status === 201) {
          response.json()
          .then(userObj => {
            setUser(userObj)
            })
        } else {
          response.json().then(messageObj => alert(messageObj.errors))
        }
      })
      // .catch(error => alert(error)) Dont need this line, right?
  }

    return (
        <UserContext.Provider value={{user, setUser, handleLogin, handleLogout, handleSignup}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}