import React, {useState, useRef, useEffect} from 'react'

const CommentForm = () => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, showErrorMessage] = useState(false)
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();


  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8 text-black'>

      <h3 className="text-xl mb-8 font-semibold border-b pb-4">CommentsForm</h3>

      <div className="grid grid-cols-1 gap-4 mb-4">
            <textarea 
            ref={commentEl} 
            className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray bg-gray-100 text-gray-700"
            placeholder='comment'
            name="comment"
            />
      </div>

      <div className="grid grid-cols-1 gap-4 mb-4">

      </div>

      <div className="grid grid-cols-1 gap-4 mb-4">

      </div>

    </div>
  )
}

export default CommentForm