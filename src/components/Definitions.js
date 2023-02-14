import React from 'react'
import {useState} from 'react'
const Definitions = ({term, definition, id}) => {

const [like, setLike] = useState(false)

const handleLike = () => {
  fetch("/favorites", {
    method: 'POST', 
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({definition_id:id})
  })
  .then(res=> {
    if (res.status === 201){
      res.json().then(userObj => setLike(true))
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
        <button onClick={handleDislike} className="favorite">✨</button>
        ) : (
          <button onClick={handleLike} className="favorite">n</button>
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