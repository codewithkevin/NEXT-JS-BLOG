import React from 'react'
import Image from 'next/image';

const Author = ({author}) => {
  return (
    <div className='text-center mt-20 mb-8 p-12 rounded-lg bg-black bg-opacity-20'>
      <div className='author left-0 right-0 -top-14'>
        <div className='flex'>
            <Image 
              alt={author.name}
              unoptimized
              src={author.photo.url}
              height="100px"
              width="100px"
              className="align-middle rounded-full"
            />
            <h3 className="text-white ml-10 my-7 text-xl font-bold">{author.name}</h3>
            </div>
        <p className='mt-5 text-lg'>{author.bio}</p>
      </div>
    </div>
  )
}

export default Author