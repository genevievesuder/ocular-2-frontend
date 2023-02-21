import { useState, useContext } from 'react'
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { UserContext } from '../../context/UserContext'

export const NewPostForm = ({posts, setPosts, setPostForm}) => {
    const {user} = useContext(UserContext)
    
    const [newPost, setNewPost] = useState({
        title: "",
        content: "",
        image:""
    })

    const submitPost = (e) => {
        e.preventDefault()
        fetch("/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newPost)
        })
           .then(res => {
            if (res.status !== 201) {
              res.json()
              .then(messageObj => alert(messageObj.errors))
            } else {
              setPostForm(false)
              res.json()
              .then(newPost => setPosts(currentPosts =>
                [newPost, ...currentPosts]))
              setNewPost({
                title: "",
                content: "",
                image:""
              })
            }
          })
      }

      const handleChange = ({target: {name, value}}) => {
        setNewPost(currentPost => ({ //What is currentPost??
            ...currentPost,
            [name]: value
        }))
      }
  return (
    <div className="new-post-container">
      <form className="new-post-form" onSubmit={submitPost}>
            <input 
            className="form-input"
            onChange={handleChange}
            name="title"
            type="text"
            value={newPost.title}
            placeholder="Title"
        ></input><br/>
        <TextareaAutosize
        className="form-input"
        aria-label="empty textarea"
        minRows={5}
        maxRows={5}
        placeholder="Start writing..."
        onChange={handleChange}
        name="content"
        type="text"
        value={newPost.content}
        style={{ width: 200 }}
    /><br/><br/>
        <input 
            className="form-input"
            onChange={handleChange}
            name="image"
            type="text"
            value={newPost.image}
            placeholder="Optional image url"
        ></input><br/><br/>
    <button className="buttons">Publish</button>
      </form>
    </div>
  )
}
