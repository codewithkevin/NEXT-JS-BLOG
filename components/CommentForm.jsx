import React, {useState, useRef, useEffect} from 'react'

const CommentForm = () => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, showErrorMessage] = useState(false)
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  const handleCommentSubmission = ("hello")

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8 text-black'>

      <h3 className="text-xl mb-8 font-semibold border-b pb-4">CommentsForm</h3>

      <div className="grid grid-cols-1 gap-4 mb-4">
            <textarea 
            ref={commentEl} 
            className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray bg-gray-100 text-black"
            placeholder='Comment'
            name="comment"
            />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <input 
            type="text"
            placeholder="Name"
            name="name"
            className="py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray bg-gray-100 text-black"
            ref={nameEl}
          />
          <input 
            type="text"
            placeholder="Email"
            name="email"
            className="py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray bg-gray-100 text-black"
            ref={emailEl}
          />
      </div>

      {error && <p className="text-xs text-red-500">All fields are required</p>}

      <div 
      className="mt-8 bg-blue-600 w-fit transition duration-500 ease inline-block text-white text-lg rounded-full px-8 py-3 cursor-pointer hover:bg-black">
        <button type="button" 
        onClick={handleCommentSubmission}
        >
              Submit
        </button>
      </div>

    </div>
  )
}

export default CommentForm