'use client'
import React from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'

function Todo({
    todo,
    setEditModal,
    setDelModal,
    setData,
    setEditVal,
    handleStatus,
}) {
    return (
        <tr className={todo.status ? 'bg-green-200' : 'bg-red-200'}>
            <td
                className={
                    todo.status
                        ? 'line-through cursor-pointer'
                        : 'cursor-pointer'
                }
                onClick={() => handleStatus(todo)}
            >
                {todo.text}
            </td>
            <td className="cursor-pointer" onClick={() => handleStatus(todo)}>
                {todo.status ? 'Done' : 'Todo'}
            </td>
            <td>
                <div className="flex gap-3 justify-center">
                    <FaEdit
                        onClick={() => {
                            setData(todo)
                            setEditVal(todo.text)
                            setEditModal(true)
                            document.getElementById('edit-todo').focus()
                        }}
                        className="text-blue-600 cursor-pointer"
                        size={20}
                    />
                    <FaTrash
                        onClick={() => {
                            setData(todo)
                            setDelModal(true)
                        }}
                        className="text-red-600 cursor-pointer"
                        size={20}
                    />
                </div>
            </td>
        </tr>
    )
}

export default Todo
