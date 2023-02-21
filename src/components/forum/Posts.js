import { useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { useNavigate } from 'react-router-dom';
// import Profile from './Profile'
// import AllProfiles from './AllProfiles';


const Posts = ({title, content, creator, image, id, setPosts}) => {
    const {user} = useContext(UserContext)
    const [comments, setComments] = useState(false)
    const [editForm, setEditForm] = useState(false)
    // const [showProfiles, setShowProfiles] = useState(false)

    const navigate = useNavigate();
    
    const [editedPost, setEditedPost] = useState({
        title: title,
        content: content,
        image:""
    })

    const showComments = () => {
        setComments(currentValue => !currentValue)
    }

    const deletePost = () => {
        fetch(`/posts/${id}`, {
            method: "DELETE",
        })
            .then((r) => { 
            if (r.status === 204) {
                console.log("Post removed")
                setPosts((currentPosts) => {
                return currentPosts.filter(p => p.id !== id)
                })
            } else {
                r.json()
                .then(err => alert(err))
            }        
        }) 
    }

    const editPost = (e) => {
        e.preventDefault()
        fetch(`/posts/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedPost)
        })
           .then(res => {
            if (res.status !== 200) {
              res.json()
              .then(messageObj => alert(messageObj.errors))
            } else {
              res.json()
              .then(editedPost => setPosts(currentPosts => {
                const index = currentPosts.findIndex(post => post.id === editedPost.id)
                return [...currentPosts.slice(0, index), editedPost, ...currentPosts.slice(index + 1)]}))
              setEditForm(false)
              setEditedPost({
                title: "",
                content: "",
                image:""
              })
            }
           })
      }
      
      const handleChange = ({target: {name, value}}) => {
        setEditedPost(currentPost => ({ 
            ...currentPost,
            [name]: value
        }))
      }

      const handleSetEditForm = () => {
        setEditForm(currentValue => !currentValue)
      }
    if (!user) return <h1>...loading</h1>
  return (
    <>
    {/* <div>
        <button onClick={() => navigate("/profiles/all")}>View Profiles</button>
    { showProfiles ? (
        <>
        <Profile />
        <AllProfiles />
        </>
    ) : null }
    </div> */}
      <div className="post-card">
        <div className="post-header">
            <div>
               <small className="post-author">{creator}</small> 
            </div>
        {creator === user.username ? (  
            <>
            <button className="buttons" onClick={handleSetEditForm} style={{ float: 'right',marginRight: "5px", marginTop: "5px", lineHeight : 1}}>edit</button>
            <button className="buttons" onClick={deletePost} style={{ float: 'right', marginRight: "3px", marginTop: "5px", lineHeight : 1}}>remove</button>
            </>
        ): null}
    { editForm? (
        <div>
        <form className="edit-post-form" onSubmit={editPost}>
                <input className="form-input"
                onChange={handleChange}
                name="title"
                type="text"
                value={editedPost.title}
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
                value={editedPost.content}
                style={{ width: 200 }}
            /><br/>
              <input 
              className="form-input"
              onChange={handleChange}
              name="image"
              type="text"
              value={editedPost.image}
              placeholder="Optional image url"
          ></input><br/>
                <button className="buttons">Update post</button>
        </form>
        </div> 
    ) : null}
           <br/> 
           <div>
               <span className="post-title">{title}</span>
               <hr></hr>
           </div>
        </div>
        <div>
            <p className="post-content">
            {content}
            </p>
        </div>
        {image ? (
        <div className="post-img-div">
            <img style={{ textAlign: "center", maxWidth: "50%", maxHeight: "100%" }}src={image} alt={"medicalimage"} />
        </div>
        ) : ( null )}
        <button className="buttons" onClick={showComments}>
        {comments ? "Hide thread" : "View thread"}
        </button>
        {comments ? (
        <div className="post-comments">
          <hr></hr>
            <p>This is a comment on a post!</p>
            <small>-user</small>
        </div>
        ) : null}
      </div>
      </>
  )
}

export default Posts