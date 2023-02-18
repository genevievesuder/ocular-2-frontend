import { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Icon from './Icon'

const Settings = ({icon, setIcon}) => {
    const {user, setUser, handleAccountDeletion, editUser} = useContext(UserContext)
    

    const [editedUserData, setEditedUserData] = useState({
        username: user.username,
        about: user.about,
        // education: "",
        // title: "",
        // field: ""
    })

    const handleChange = ({target: {name, value}}) => {
        setEditedUserData(currentUser => ({ 
            ...currentUser,
            [name]: value
        }))
      }

      if (!user) return <h1>...loading</h1>
  return (
    <div>
        <Icon icon={icon} setIcon={setIcon}/>
        <form className="edit-user-form" onSubmit={(e) => editUser(e, editedUserData, setEditedUserData)}>
            {/* <label>Edit password</label>
            <input 
                onChange={handleChange}
                name="password"
                type="password"
                value={editedUserData.password}
                placeholder={user.password}
            ></input><br/> */}
            <label>Edit username</label>
                <input 
                onChange={handleChange}
                name="username"
                type="text"
                value={editedUserData.username}
            ></input><br/>
            {/* <label>Edit education</label>
                <input 
                onChange={handleChange}
                name="education"
                type="text"
                value={editedUserData.education}
                placeholder={user.education}
            ></input><br/>
             <label>Edit title</label>
                <input 
                onChange={handleChange}
                name="title"
                type="text"
                value={editedUserData.title}
                placeholder={user.title}
            ></input><br/>
             <label>Edit field</label>
                <input 
                onChange={handleChange}
                name="field"
                type="text"
                value={editedUserData.field}
                placeholder={user.field}
            ></input><br/> */}
            <label>Edit bio</label><br/>
            <TextareaAutosize
                aria-label="empty textarea"
                minRows={3}
                maxRows={5}
                placeholder={user.about}
                onChange={handleChange}
                name="about"
                type="text"
                style={{ width: 200 }}
            /><br/>
                <button>Update Profile</button>
        </form>
        <br/>
        <button onClick={handleAccountDeletion}>Delete Account</button>
    </div>
  )
}

export default Settings