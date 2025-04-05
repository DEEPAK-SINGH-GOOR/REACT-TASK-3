import React from 'react'
import { useDispatch } from 'react-redux'
import { reset } from '../redux/Action'

const Button = () => {
    const dispatch=useDispatch()
    return (
        <button onClick={()=>dispatch(reset())}>Reset</button>
    )
}

export default Button