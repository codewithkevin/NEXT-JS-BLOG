/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const PostDetail = ({post}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg  lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
            <img 
              src={post.featuredImage.url}
              alt={post.title}
              className="w-full h-1/5	"
            />
        </div>
    </div>
  )
}

export default PostDetail