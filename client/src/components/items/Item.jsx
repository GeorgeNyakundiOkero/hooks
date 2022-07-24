import React from 'react'
import './Item.css'
import {FaPen, FaTrash} from 'react-icons/fa'

function Item({text, remove, update}) {
  return (
    <div className="items">
        <div className='text'>{text}</div>
        <div className="icons">
            <FaPen onClick={update}/>
            <FaTrash onClick={remove}/>
        </div>
    </div>
  )
}

export default Item