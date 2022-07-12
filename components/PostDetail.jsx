/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import moment from 'moment'


const PostDetail = ({post}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg  lg:p-8 pb-12 mb-8">
        <div className="relative overflow-hidden shadow-md mb-6">
            <img 
              src={post.featuredImage.url}
              alt={post.title}
              className="object-top h-[30%] w-[50%]  rounded-t-lg"
            />
        </div>
        <div className="px-4 lg:px-8">
            <div className="flex items-center mb-8 w-full">
              <div className="w-16 flex-none">
                  <img 
                  src={post.featuredImage.url} 
                  alt={post.title}
                  className="align-middle rounded-full h-[60px] w-[60px]" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default PostDetail