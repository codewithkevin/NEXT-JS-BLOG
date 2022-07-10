/* eslint-disable @next/next/no-img-element */
import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({post}) => {
  console.log(post)
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pd-12 mb-8'>
        <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
           <img src={post.featuredImage.url} 
            alt={post.title}
            className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
           />
        </div>
        <h1 className='transition duration-700 text-center mb-8 cursor-pointer
        hover:text-pink-600 text-3xl font-semibold text-black'>
            <Link href={`/posts/${post.slug}`}>
                {post.title}
            </Link>
        </h1>
    </div>
  )
}

export default PostCard