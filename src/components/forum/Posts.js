import { useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import TextareaAutosize from '@mui/base/TextareaAutosize';


const Posts = ({title, content, creator, image, id, setPosts}) => {
    const {user} = useContext(UserContext)
    const [comments, setComments] = useState(false)
    const [editForm, setEditForm] = useState(false)

    const [editedPost, setEditedPost] = useState({
        // user_id: "", Not needed because of Post controller, right?
        title: "",
        content: ""
        // image:""
    })
    const showComments = () => {
        setComments(currentValue => !currentValue)
    }

    //delete post

    const deletePost = () => {
        fetch(`/posts/${id}`, {
            method: "DELETE",
        })
            .then((r) => { 
            if (r.status === 204) {
                console.log("Post removed")
                // setPosts((currentPosts) => (
                //     {
                //     ...currentPosts, 
                //     posts: [
                //         ...currentPosts.filter(p => p.id !== id)
                //     ]
                //     }))
            } else {
                r.json()
                .then(err => alert(err))
            }        
            }) 
        }


    //edit post

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
              alert("Post updated successfully");
              res.json()
              .then(editedPost => setPosts(currentPosts =>
                [editedPost, ...currentPosts]))
              setEditedPost({
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
        setEditedPost(currentPost => ({ 
            ...currentPost,
            [name]: value
        }))
      }

      const handleSetEditForm = () => {
        setEditForm(currentValue => !currentValue)
      }

  return (
      <div className="post-card">
        <div className="post-header">
            <div>
               <small className="post-author">{creator}</small> 
            </div>
        {creator === user.username ? (  
            <>
            <button onClick={handleSetEditForm} style={{ float: 'right', lineHeight : 1}}>edit</button>
            <button onClick={deletePost} style={{ float: 'right', lineHeight : 1}}>remove</button>
            </>
        ): null}
    { editForm? (
        <div>
        <form className="edit-post-form" onSubmit={editPost}>
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
                value={editedPost.title}
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
                value={editedPost.content}
                style={{ width: 200 }}
            /><br/>
                <button>Publish</button>
        </form>
        </div> 
    ) : null}

           <br/> 
           <div>
               <span className="post-title">{title}</span>
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
        <button onClick={showComments}>
        {comments ? "Hide thread" : "View thread"}
        </button>
        {comments ? (
        <div className="post-comments">
            <p>This is a comment on a post!</p>
            <small>-</small>
        </div>
        ) : null}
      </div>
  )
}

export default Posts