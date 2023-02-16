import { useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext'


const Posts = ({title, content, creator, image, id, setPosts}) => {
    const {user} = useContext(UserContext)
    const [comments, setComments] = useState(false)

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

    // const editPost = () => {

  return (
      <div className="post-card">
        <div className="post-header">
            <div>
               <small className="post-author">{creator}</small> 
            </div>
        {creator === user.username ? (  
            <>
            <button style={{ float: 'right', lineHeight : 1}}>edit</button>
            <button onClick={deletePost} style={{ float: 'right', lineHeight : 1}}>remove</button>
            </>
        ): null}
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