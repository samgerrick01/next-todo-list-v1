'use client'

import { FaPlus } from 'react-icons/fa'
import Modal from './Modal'
import { useState } from 'react'
import { addTodo } from '@/api'
import uniqid from 'uniqid'
import { useRouter } from 'next/navigation'

function AddTask() {
    const router = useRouter()
    const [modalOpen, setModalOpen] = useState(false)
    const [newTodoValue, setNewTodoValue] = useState('')

    const handleSubmitNewTodo = async (e) => {
        e.preventDefault()
        await addTodo({
            id: uniqid(),
            text: newTodoValue,
            status: false,
        })
        setNewTodoValue('')
        setModalOpen(false)
        router.refresh()
    }
    return (
        <div>
            <button
                onClick={() => {
                    setModalOpen(true)
                    document.getElementById('add-todo').focus()
                }}
                className="btn btn-primary w-full"
            >
                Add New Todo <FaPlus className="ml-2" />
            </button>
            <Modal
                close={() => setModalOpen(false)}
                open={modalOpen}
                title="Add Todo"
            >
                <form onSubmit={handleSubmitNewTodo}>
                    <div className="modal-action justify-center">
                        <input
                            id="add-todo"
                            style={{ color: 'black' }}
                            type="text"
                            placeholder="Enter Todo"
                            className="input input-ghost w-full max-w-xs bg-white"
                            value={newTodoValue}
                            onChange={(e) => setNewTodoValue(e.target.value)}
                        />
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default AddTask
