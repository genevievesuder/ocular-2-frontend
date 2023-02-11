import React from 'react'
import {useState} from 'react'
const Definitions = ({term, definition, id}) => {

const [like, setLike] = useState(true)

const handleLike = () => {
  fetch("http://localhost:3000/favorites", {
    method: 'POST', 
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({definition_id:id})
  })
  .then(res=> {
    if (res.status === 201){
      res.json().then(userObj => console.log(userObj))
    } else {
      res.json().then(errorObj => alert(errorObj.errors))
    }
  })
  .catch(err => alert(err));
}

const handleDislike = () => {

}

  return (
    <div className="def-card">
      <div className="term">
        { like? (
        <button onClick={handleLike} className="favorite">✨</button>
        ) : (
          <button onClick={handleDislike} className="favorite">n</button>
        ) }
        <p style={{fontSize: "18px", textAlign: "center", padding: "auto"}}>{term}</p>
      </div>
      <div className="definition">
        <p style={{fontSize: "16px", textAlign: "center", padding: "auto"}}>{definition}</p>
      </div>
    </div>
  )
}

export default Definitions