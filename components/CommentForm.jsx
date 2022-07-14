import React, {useState, useRef, useEffect} from 'react'

const CommentForm = () => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, showErrorMessage] = useState(false)
  const comment = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();
  
  return (
    <div>CommentForm</div>
  )
}

export default CommentForm