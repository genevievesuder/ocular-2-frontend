import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const UserContext = createContext()

const UserProvider = ({children}) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState("")

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
          })
        } else {
          resp.json().then(messageObj => setNotification(messageObj.error))
        }
      })
  }

///Alerted before, now setting notification!!!

  const handleLogout = () => {
  fetch("/logout", {
    method: "DELETE",
  })
    .then((r) => { 
      if (r.status === 204) {
        setNotification("Successfully logged out ")
        setUser(null)
        navigate("/")
      } else {
        r.json()
        .then(err => setNotification(err))
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
          response.json().then(messageObj => setNotification(messageObj.errors))
        }
      })
      // .catch(error => alert(error)) Dont need this line, right?
  }

  const handleAccountDeletion = () => {
    fetch(`/users/${user.id}`, {
      method: "DELETE",
    })
      .then((r) => { 
        if (r.status === 204) {
          setUser(null)
          setNotification("Your account has been successfully deleted")
          navigate("/")
        } else {
          r.json()
          .then(err => setNotification(err))
        }        
      }) 
    }

const editUser = (e, editedUserData, setEditedUserData) => {
  e.preventDefault()
  console.log(editedUserData)
  fetch(`/users/${user.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedUserData)
  })
     .then(res => {
      if (res.status !== 200) {
        res.json()
        .then(messageObj => alert(messageObj.errors))
      } else {
        setNotification("Your profile has been updated successfully!");
        res.json()
        .then((updatedUser) => setUser(updatedUser))
        .then(() => navigate("/userhome"))
        setEditedUserData({
          username: "",
          about: "",
          education: "",
          title: "",
          field: ""
        })
      }
  })
}

    return (
        <UserContext.Provider value={{user, setUser, handleLogin, handleLogout, handleSignup, handleAccountDeletion, editUser, notification, setNotification}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}