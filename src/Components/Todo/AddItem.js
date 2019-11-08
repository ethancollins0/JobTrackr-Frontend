import React from 'react'
import './AddItem.scss'

const AddItem = ({ bgcolor, toggleForm }) => { 
        return (
            <div className='add-todo-list-item' style={{background: bgcolor}}>
                <i onClick={toggleForm} className="fas fa-plus-circle fa-2x"></i>
            </div>
        )
}

export default AddItem