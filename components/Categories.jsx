import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {getCategories} from '../services'

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() =>{
      getCategories().then((newCategories) => setCategory(newCategories))
  }, [])
  
  return (
    <div>
      Categories
    </div>
  )
}

export default Categories