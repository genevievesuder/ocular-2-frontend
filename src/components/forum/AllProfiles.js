import React from 'react'
import { useNavigate } from 'react-router-dom';

const AllProfiles = () => {
    const navigate = useNavigate();
    
  return (
    <div>
        <button onClick={() => navigate(-1)}>← Back to Forum</button>
        All Profiles
    </div>
  )
}

export default AllProfiles