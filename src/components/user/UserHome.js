import {useState, useContext} from 'react';
import { UserContext } from '../../context/UserContext';
import UserFavorites from './UserFavorites';

const UserHome = () => {
const {user, setUser} = useContext(UserContext)
const mappedUserFaves = user.favorites.map((fave) => <UserFavorites {...fave} term={fave.term} definition={fave.definition} key={fave.id}/>);
// user.favorites.forEach(fave => console.log(fave.term));  

return (
    <div className="user-container">
      <div className="welcome-user">
        <h1>Welcome, {user.username}</h1>
      </div>   
      {mappedUserFaves}
    </div>
  )
}

export default UserHome;
