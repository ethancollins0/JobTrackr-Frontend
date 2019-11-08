import React from 'react'
import TodoList from './TodoList'
import './Todo.scss'

// const stickyNoteColors = [
//     '#ff7eb9',
//     '#ff65a3',
//     '#7afcff',
//     '#feff9c',
//     '#fff740',
// ]

function ToDoContainer({ lists }){
    const renderLists = () => {
        return lists.map(list => (
            <TodoList id={list.title.id} 
                      bgcolor={list.title.color} 
                      title={list.title.name} 
                      items={list.items} />
        ))
    }

    return (
        <div className='todo-container'>
            {renderLists()}
        </div>
    )
}

export default ToDoContainer
