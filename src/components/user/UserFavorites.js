import {useContext} from 'react';
import { UserContext } from '../../context/UserContext';

const UserFavorites = ({definition, id}) => {
const {setUser} = useContext(UserContext)

const handleDislike = () => {
  fetch(`/favorites/${id}`, {
    method: "DELETE",
  })
    .then((r) => { 
      if (r.status === 204) {
        console.log(`${definition.term} unfavorited`)
          setUser((currentUser) => (
            {
              ...currentUser, 
              favorites: [
                ...currentUser.favorites.filter(f => f.definition.id !== definition.id)
              ]
            }))
      } else {
        r.json()
        .then(err => alert(err))
      }        
    }) 
  }


  return (
    <div className="fave-card">
        <span><button onClick={handleDislike} style={{border:"none", backgroundColor:"transparent"}}>✨</button>{definition.term}</span><br/>
        <p>{definition.definition}</p>
    </div>
  )
}

export default UserFavorites