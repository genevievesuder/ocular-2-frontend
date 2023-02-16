import React from 'react'

const AnatomyCard = () => {
  return (
    <div>
      <div className="anatomy-img-div">
        <img className="anatomy-img"src="https://www.eolaeyes.com/assets/images/c/Eye-Anatomy-Graphic_Labeled-3a011106.jpg" alt="anatomy img" />
      </div>
      <div className="anatomy-desc-div">
        <p className="anatomy-desc">This is a description of this image</p>
      </div>
    </div>
  )
}

export default AnatomyCard