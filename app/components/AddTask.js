'use client'

import { FaPlus } from 'react-icons/fa'
import Modal from './Modal'
import { useState } from 'react'
import { addTodo, loading } from '@/api'
import uniqid from 'uniqid'
import { useRouter } from 'next/navigation'
import Loading from './Loading'

function AddTask() {
    const router = useRouter()
    //modal state
    const [modalOpen, setModalOpen] = useState(false)
    //input state
    const [newTodoValue, setNewTodoValue] = useState('')
    //loading state
    const [loading, setLoading] = useState(false)

    const handleSubmitNewTodo = async (e) => {
        e.preventDefault()
        if (newTodoValue) {
            setLoading(true)
            await addTodo({
                id: uniqid(),
                text: newTodoValue,
                status: false,
            })
            setModalOpen(false)
            setNewTodoValue('')
            router.refresh()
            setTimeout(() => {
                setLoading(false)
            }, 500)
        }
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
                            autoComplete="off"
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
            <Loading value={loading} />
        </div>
    )
}

export default AddTask
