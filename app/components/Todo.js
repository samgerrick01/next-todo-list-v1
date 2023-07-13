'use client'
import React from 'react'

function Todo({
    todo,
    setEditModal,
    setDelModal,
    setData,
    setEditVal,
    handleStatus,
}) {
    return (
        <tr className={todo.status ? 'bg-green-300' : 'bg-gray-300'}>
            <td className={todo.status ? 'line-through' : ''}>{todo.text}</td>
            <td className="cursor-pointer" onClick={() => handleStatus(todo)}>
                {todo.status ? 'Done' : 'Not Done'}
            </td>
            <td>
                <div className="flex justify-between">
                    <button
                        onClick={() => {
                            setData(todo)
                            setEditVal(todo.text)
                            setEditModal(true)
                            document.getElementById('edit-todo').focus()
                        }}
                        className="btn btn-primary"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => {
                            setData(todo)
                            setDelModal(true)
                        }}
                        className="btn btn-error"
                    >
                        Del
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default Todo
