import React from 'react'

const Home = () => {
  return (
    <div className="home-background">
    <img className="backdrop-img-2" src={process.env.PUBLIC_URL+"/backdrop2.png"} alt="backdrop2"/>
    <img className="backdrop-img" src={process.env.PUBLIC_URL+"/backdrop.png"} alt="backdrop"/>
        <div className="welcome-container">
            <span className="welcome">o c u l a r</span><br/>
            <p className="welcome-subheader">your new optometry companion</p>
        </div>
    </div>
  )
}

export default Home;