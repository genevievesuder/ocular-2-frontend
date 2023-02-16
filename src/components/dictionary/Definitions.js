import React from 'react'
import { useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext';

const Definitions = ({term, definition, id}) => {
const {user, setUser} = useContext(UserContext)
const likeIcon = user?.favorites.find(fave => fave.definition.id === id) ? true : false
const [like, setLike] = useState(likeIcon)

const handleLike = () => {
  fetch("/favorites", {
    method: 'POST', 
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({definition_id:id})
  })
  .then(res=> {
    if (res.status === 201){
      setLike(true)
      res.json().then(newFave => {
        setUser((currentUser) => (
          {
            ...currentUser, 
            favorites: [
              ...currentUser.favorites, newFave
            ]
          }))
      })
    } else {
      res.json().then(errorObj => alert(errorObj.errors))
    }
  })
  .catch(err => alert(err));
}

const handleDislike = () => {
    fetch(`/favorites/${id}`, {
      method: "DELETE",
    })
      .then((r) => { 
        if (r.status === 204) {
          console.log(`${term} unfavorited`)
            setLike(false)
            setUser((currentUser) => (
              {
                ...currentUser, 
                favorites: [
                  ...currentUser.favorites.filter(f => f.definition.id !== id)
                ]
              }))
        } else {
          r.json()
          .then(err => alert(err))
        }        
      }) 
    }

  return (
    <div className="def-card">
      <div className="term">
        { like? (
        <button onClick={handleDislike} className="favorite">✨</button>
        ) : (
        <button onClick={handleLike} className="un-favorite">✨</button>
        ) }
        <p style={{fontSize: "18px", textAlign: "center", padding: "auto"}}>{term}</p>
      </div>
      <div className="definition">
        <p style={{fontSize: "16px", textAlign: "center", padding: "auto"}}>{definition}</p>
      </div>
    </div>
  )
}

export default Definitions