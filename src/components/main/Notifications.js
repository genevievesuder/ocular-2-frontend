import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext';

const Notifications = () => {
    const {notification, setNotification} = useContext(UserContext)

    useEffect(() => {
        const timer = setTimeout(()=> {
            setNotification("")
        }, 3000)
        return () => {
            clearTimeout(timer)
        };
    }, [notification, setNotification]);

  return (
    <div className="notify-container">
      <span className="notify">{notification}</span>
    </div>
  )
}

export default Notifications