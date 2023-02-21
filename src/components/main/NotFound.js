import React from 'react'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <img src="https://media.istockphoto.com/id/884072610/vector/page-not-found-concept-404-error-web-page-with-cute-cartoon-face-flat-line-illustration.jpg?s=612x612&w=0&k=20&c=-luF0d_IlWswRpYHrblo5AY7zGHY8zIbJU2qtd5XXrw=" alt="notfound"/>
    <br/>
    <button className="buttons" onClick={() => navigate("/")}>← Go home</button>
    </div>
  )
}

export default NotFound