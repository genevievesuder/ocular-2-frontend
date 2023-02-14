import { useState } from 'react'

const Posts = ({title, content, user}) => {
    const [comments, setComments] = useState(false)

    const showComments = () => {
        setComments(currentValue => !currentValue)
    }

  return (
    <div className="post-container">
      <div className="post-card">
        <div className="post-header">
            <small className="post-author">{user}</small> 
            <span className="post-title">{title}</span>
        </div>
        <div>
            <p className="post-content">
            {content}
            </p>
        </div>
        <button onClick={showComments}>
        {comments ? "Hide thread" : "View thread"}
        </button>
        {comments ? (
        <div className="post-comments">
            <p>This is a comment on a post!</p>
            <small>-User</small>
        </div>
        ) : null}
      </div>
    </div>
  )
}

export default Posts