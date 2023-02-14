import Posts from './Posts'
import React from 'react'
import { useState, useEffect } from 'react'

const Forum = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("/posts")
     .then(res => res.json())
     .then(setPosts)
     .catch(err => alert(err))
  }, []);

  const mappedPosts = posts?.map(post => <Posts {...post} key={post.id} />);

  return (
    <div className="forum-container">
      <div className="forum-header">
        <span className="forum-welcome">o c u l a r &nbsp;</span>
        <span className="forum-welcome-2">forum</span><br/>
        <span className="forum-subheader">👁 a place to 👁<br/>share thoughts & ideas<br/>connect with like-minded people<br/>ask & answer questions</span>
          <div className="post-search-div">
          <input 
              className="post-search" 
              // value={searchPosts}
              placeholder="Search posts by keyword 🔎"
              // onChange={handlePostSearch}> 
          />
          </div>
        </div>
      {mappedPosts}
    </div>
  )
}

export default Forum