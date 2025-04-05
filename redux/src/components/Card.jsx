import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteBlogs } from '../redux/blogs/Action'

const Card = ({ title, id, index, onDelete }) => {

    return (
        <div>
            <h1> <span>{index + 1}</span> : {title}</h1>
            <button onClick={() => onDelete(id)} >Delete</button>
        </div>
    )
}

export default Card