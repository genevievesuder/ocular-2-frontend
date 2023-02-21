import {useState, useContext} from 'react';
import { UserContext } from '../../context/UserContext';
import UserFavorites from './UserFavorites';
import { useNavigate } from 'react-router-dom';



const UserHome = ({icon, setIcon}) => {
  const navigate = useNavigate()
  const {user, setUser} = useContext(UserContext)
  console.log(user)
  
  
  const mappedUserFaves = user && user.favorites && user.favorites.map((fave) => <UserFavorites {...fave} term={fave.term} definition={fave.definition} key={fave.id} id={fave.id}/>); 
  
  const handleGoToSettings = () => {
    navigate("/settings")
  }
  
  if (!user) return <h1>...loading</h1>
return (
    <div className="user-container">
      <div className="welcome-user">
        <span>Welcome, {user.username}!</span>
        <button style={{float:'right', marginRight:'10px'}} className="buttons" onClick={handleGoToSettings}>Edit profile</button>
          </div> 
           <div className="profile-container">
            <div className="user-header">
              <span className="username">{user.username}{icon}</span><br/>
            { user.education !== null ? (
              <div>
                <span className="user-details">{user.education}</span>
                <span className="user-details">{user.title}</span>
                <span className="user-details">{user.field}</span><br/>
              </div>
            ) : null }
              <br/>
              <div>
                <span>About</span>
                <p className="about-me">{user.about}</p>
              </div>
             </div>   
            </div>  
            { user.favorites ? (
            <>
              <h3>Favorites</h3>
          <div className="user-fave-box">
          {mappedUserFaves}
          </div>
           </> ) : null }
          
    </div>
  )
}

export default UserHome;
