import React from 'react'
import './AddItem.scss'

const AddItem = ({ addItem, bgcolor }) => { 
        return (
            <div className='add-todo-list-item' style={{background: bgcolor}}>
                <i onClick={addItem} class="fas fa-plus-circle fa-2x"></i>
            </div>
        )
}

export default AddItem