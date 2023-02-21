import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Icon from './Icon'

const Settings = ({icon, setIcon}) => {
    const {user, setUser, handleAccountDeletion, editUser} = useContext(UserContext)
    const [accountDelete, showAccountDelete] = useState(false)
    const navigate = useNavigate();
    
    const [editedUserData, setEditedUserData] = useState({
        username: user.username,
        about: user.about,
        education: user.education,
        title: user.title,
        field: user.field
    })

    const handleShowDelete = () => {
        showAccountDelete(currentState => !currentState)
    }

    const handleChange = ({target: {name, value}}) => {
        setEditedUserData(currentUser => ({ 
            ...currentUser,
            [name]: value
        }))
      }

      if (!user) return <h1>...loading</h1>
  return (
    <div>
    <button className="buttons" onClick={() => navigate(-1)}>← Back to profile</button>
    <div className="settings-container">
        <Icon icon={icon} setIcon={setIcon}/>
        <form className="edit-user-form" onSubmit={(e) => editUser(e, editedUserData, setEditedUserData)}>
            <label>Username</label>
                <input 
                className="edit-user-input"
                onChange={handleChange}
                name="username"
                type="text"
                value={editedUserData.username}
            ></input><br/>
            <label>Education</label>
                <input 
                className="edit-user-input"
                onChange={handleChange}
                name="education"
                type="text"
                value={editedUserData.education}
            ></input><br/>
             <label>Title</label>
                <input 
                className="edit-user-input"
                onChange={handleChange}
                name="title"
                type="text"
                value={editedUserData.title}
            ></input><br/>
             <label>Field</label>
                <input 
                className="edit-user-input"
                onChange={handleChange}
                name="field"
                type="text"
                value={editedUserData.field}
            ></input><br/>
            <label>Bio</label><br/>
            <TextareaAutosize
                className="edit-user-input"
                aria-label="empty textarea"
                minRows={3}
                maxRows={5}
                value={editedUserData.about}
                onChange={handleChange}
                name="about"
                type="text"
                style={{ width: 300 }}
            /><br/>
                <button className="buttons">Update Profile</button>
        </form>
        <br/>
        { accountDelete ? null : (
        <button className="buttons" onClick={handleShowDelete}>Delete Account</button>)}
        { accountDelete ? (
        <div>
        <span><b>Are you sure you want to delete your account? This action cannot be undone.</b></span><br/>
        <button className="buttons" style={{color: "red"}} onClick={handleAccountDeletion}>Confirm Account Deletion</button>
        <button className="buttons" onClick={handleShowDelete}>Go back</button>
        </div>
        ) : null}
    </div>
    </div>
  )
}

export default Settings