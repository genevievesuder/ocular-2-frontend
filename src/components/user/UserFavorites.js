import {useState, useContext} from 'react';
import { UserContext } from '../../context/UserContext';

const UserFavorites = ({term, definition}) => {
const {user} = useContext(UserContext)

  return (
    <div className="fave-card">
        <span><button style={{border:"none", backgroundColor:"transparent"}}>✨</button>{definition.term}</span><br/>
        <p>{definition.definition}</p>
    </div>
  )
}

export default UserFavorites