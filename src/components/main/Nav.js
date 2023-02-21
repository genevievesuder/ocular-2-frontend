import React from 'react';
import Drawer from '@mui/material/Drawer';
import { Link, useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext';

const Nav = () => {
    const navigate = useNavigate()
    const {handleLogout, user} = useContext(UserContext)
    const [open, setOpen] = useState(false)
    
    function toggleDrawer(){
        setOpen(!open)
    }

    const handlePleaseLogin = () => {
        alert('Please login to access the Community Forum :)')
        navigate("/account")
    }

    return (
        <div>
          <MenuIcon onClick={toggleDrawer}/>
            <Drawer anchor='left' open={open} onClose={toggleDrawer}>
                <nav className="nav">
            <CloseIcon style={{float: "right", cursor: "pointer"}} onClick={toggleDrawer}/><br/>
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
                { user ? (
                <Link to="/forum">Forum</Link>
                ) : <button onClick={handlePleaseLogin} className="community-auth-halt">Community</button> }
                </nav>
            </Drawer>
        </div>
    )
}

export default Nav;
