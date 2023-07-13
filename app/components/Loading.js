'use client'

function Loading({ value }) {
    return (
        <dialog
            id="my_modal_1"
            className={`modal ${value ? 'modal-open' : ''}`}
        >
            <span className="loading loading-dots loading-lg"></span>
        </dialog>
    )
}

export default Loading
