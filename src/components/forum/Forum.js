import Posts from './Posts'
import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { NewPostForm } from './NewPostForm'
import { UserContext } from '../../context/UserContext';



const Forum = () => {
  const {user} = useContext(UserContext)
  const [posts, setPosts] = useState([])
  const [postForm, setPostForm] = useState(false)
  const [searchPosts, setSearchPosts] = useState("")


  useEffect(() => {
    fetch("/posts")
     .then(res => res.json())
     .then(setPosts)
     .catch(err => alert(err))
  }, []);

  const newPostForm = () => {
    setPostForm(currentValue => !currentValue)
  }

  const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchPosts.toLowerCase()) || post.content.toLowerCase().includes(searchPosts.toLowerCase()));
  
  const mappedandFilteredPosts = filteredPosts?.map(post => <Posts {...post} key={post.id} setPosts={setPosts}/>);

  const handleSearch = (e) => {
    setSearchPosts(e.target.value);
  }

  return (
    <div className="forum-container">
      <div className="forum-header">
        <span className="forum-welcome">o c u l a r &nbsp;</span>
        <span className="forum-welcome-2">forum</span><br/>
        <span className="forum-subheader">👁 a place to 👁<br/>share thoughts & ideas<br/>connect with like-minded people<br/>ask & answer questions</span>

          <div className="post-search-div">
          <input 
              className="post-search" 
              name="search" //necessary?
              type="search" //necessary?
              value={searchPosts}
              placeholder="Search posts by keyword 🔎"
              onChange={handleSearch}
          />
          </div>
          <div className="write-something-div">
          <button onClick={newPostForm} className="new-post">{postForm ? "Maybe later" : "✎ Write something"}</button>
          </div>
          {postForm ? <NewPostForm setPostForm={setPostForm} posts={posts} setPosts={setPosts}/> : null}
        </div>
        <div className="post-container">
          {mappedandFilteredPosts}
        </div>
    </div>
  )
}

export default Forum