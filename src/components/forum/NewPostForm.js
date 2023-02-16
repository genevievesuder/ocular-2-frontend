import { useState, useContext } from 'react'
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { UserContext } from '../../context/UserContext'

export const NewPostForm = ({posts, setPosts}) => {
    const {user} = useContext(UserContext)
    
    const [newPost, setNewPost] = useState({
        // user_id: "", Not needed because of Post controller, right?
        title: "",
        content: ""
        // image:""
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
              alert("Post created");
              res.json()
              .then(newPost => setPosts(currentPosts =>
                [newPost, ...currentPosts]))
              setNewPost({
                // user_id: "",
                title: "",
                content: ""
                // image:""
              })
            }
           })
           //This is not showing my custom validation errors I built
          // .catch(error => alert(error)) Do I need this line??
      }

      const handleChange = ({target: {name, value}}) => {
        setNewPost(currentPost => ({ //What is currentPost??
            ...currentPost,
            [name]: value
        }))
    }
  return (
    <div>
      <form className="new-post-form" onSubmit={submitPost}>
        {/* <input 
            onChange={handleChange}
            name=""
            type=""
            value=""
            placeholder=""
        ></input><br/> */}
             <input 
            onChange={handleChange}
            name="title"
            type="text"
            value={newPost.title}
            placeholder="Title"
        ></input><br/>
        <TextareaAutosize
      aria-label="empty textarea"
      minRows={3}
      maxRows={5}
      placeholder="Start writing..."
      onChange={handleChange}
      name="content"
      type="text"
      value={newPost.content}
      style={{ width: 200 }}
    /><br/>
    <button >Publish</button>
      </form>
    </div>
  )
}
