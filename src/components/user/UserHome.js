import {useState, useContext} from 'react';
import { UserContext } from '../../context/UserContext';
import UserFavorites from './UserFavorites';
import { useNavigate } from 'react-router-dom';



const UserHome = ({icon, setIcon}) => {
  const navigate = useNavigate()
  const {user, setUser} = useContext(UserContext)
  console.log(user)
  
const mappedUserFaves = user.favorites.map((fave) => <UserFavorites {...fave} term={fave.term} definition={fave.definition} key={fave.id}/>); 

const handleGoToSettings = () => {
  navigate("/settings")
}

if (!user) return <h1>...loading</h1>
return (
    <div className="user-container">
      <div className="welcome-user">
        <h1>Welcome, {user.username}!</h1>
        <button onClick={handleGoToSettings}>Account Settings</button>
          </div>   
            <div className="user-header">
              <p className="username">{user.username}{icon}</p><br/>
            { user.education !== null ? (
              <div>
                {/* <strong>School - </strong> */}
                <span className="user-details">{user.education}</span>
                {/* <strong>Title - </strong> */}
                <span className="user-details">{user.title}</span>
                {/* <strong>Field - </strong> */}
                <span className="user-details">{user.field}</span><br/>
              </div>
            ) : null }
              <br/>
              <div>
                <span>About</span>
                <p className="about-me">{user.about}</p>
              </div>
            </div>    
              <h3>Favorites</h3>
          <div className="user-fave-box">
          {mappedUserFaves}
          </div>
    </div>
  )
}

export default UserHome;
