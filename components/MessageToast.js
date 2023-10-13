import React from 'react'
import toast from 'react-hot-toast'

const MessageToast = ({ toasts, type, title, description }) => {
  return (
    <div
      className={`${
        toasts.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="ml-3 flex-1">
          <p className={`text-sm font-medium ${type === 'error' ? 'text-red-600':'text-green-500'}`}>
            {title}
          </p>
          <p className="mt-1 text-sm text-gray-500">
            {description}
          </p>
        </div>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(toasts.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default MessageToast