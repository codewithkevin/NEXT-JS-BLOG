/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Author = ({author}) => {
  return (
    <div>
      <img 
        alt={author.name}
        src={author.photo.url}
        className="align-middle rounded-full h-[100px] w-[100px]"
      />
    </div>
  )
}

export default Author