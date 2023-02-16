import {useState, useContext} from 'react';
import { UserContext } from '../../context/UserContext';

const UserFavorites = ({term, definition}) => {
const {user, setUser} = useContext(UserContext)

  return (
    <div>
        <p>{definition.term}{definition.definition}</p>
    </div>
  )
}

export default UserFavorites