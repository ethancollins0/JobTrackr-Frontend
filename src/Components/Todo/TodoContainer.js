import React from 'react'
import TodoList from './TodoList'
import './Todo.scss'

function ToDoContainer({ lists, createListItem, showForm, deleteList, deleteListItem }){
    const renderLists = () => {
        return lists.map(list => (
            <TodoList id={list.title.id} 
                      bgcolor={list.title.color} 
                      title={list.title.name} 
                      items={list.items} 
                      createListItem={createListItem} 
                      deleteList={deleteList} 
                      deleteListItem={deleteListItem} />
        ))
    }

    return (
        <div className={`todo-container ${showForm ? 'active-todo' : 'inactive-todo'}`}>
            {renderLists()}
        </div>
    )
}

export default ToDoContainer
