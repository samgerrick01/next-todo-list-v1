function Modal({ open, close, title, children }) {
    return (
        <dialog
            id="my_modal_3"
            className={`modal bg-slate-50 ${open ? 'modal-open' : ''}`}
        >
            <div className="modal-box bg-slate-50">
                <button
                    onClick={() => close()}
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                    ✕
                </button>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                {children}
            </div>
        </dialog>
    )
}

export default Modal
