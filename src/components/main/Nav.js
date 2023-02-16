import React from 'react';
import Drawer from '@mui/material/Drawer';
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext';

const Nav = () => {
    const {handleLogout, user} = useContext(UserContext)
    const [open, setOpen] = useState(false)
    
    function toggleDrawer(){
        setOpen(!open)
    }

    return (
        <div>
          <MenuIcon  onClick={toggleDrawer}/>
            <Drawer anchor='left' open={open} onClose={toggleDrawer}>
                <nav className="nav">
                <Link to="/" className="home-nav"><VisibilityOutlinedIcon/></Link><br/>
                { user ? (
                <>
                <button onClick={handleLogout} className="logout">Logout ➺</button>
                <Link to="/userhome">Profile</Link><br/>
                </>
                ) : (
                <>
                <Link to="/account">Login</Link><br/>
                </>
                )}
                <Link to="/dictionary">Dictionary</Link><br/>
                <Link to="/anatomy">Anatomy</Link><br/>
                <Link to="/forum">Forum</Link>
                </nav>
            </Drawer>
        </div>
    )
}

export default Nav;
