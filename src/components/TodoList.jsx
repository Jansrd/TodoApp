import React from 'react'
import '../style/TodoList.css'
import { IoMdTrash } from "react-icons/io";

const TodoList = ({ id, title, description, removeTodo }) => {

    return (
        <div className="todo__list__container">
            <div className="todo__list__content" key={id} >
                <div className="todo__info">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="todo__options">
                    <button onClick={() => removeTodo(id)} style={{ color: 'red' }}><IoMdTrash /></button>
                </div>
            </div>
        </div>
    )
}

export default TodoList