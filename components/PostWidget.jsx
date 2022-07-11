/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'
import {getRecentPosts, getSimilarPosts} from '../services'
import Image from 'next/image'

const PostWidget = ({categories, slug}) => {
  
  const [relatedPost, setrelatedPost] = useState([])

  useEffect(() => {
    slug ? 
      getSimilarPosts(categories, slug).then((result) => setrelatedPost(result))
      :
      getRecentPosts().then((result) => setrelatedPost(result))
  })

  console.log(relatedPost)

  return (
    <div className="bg-white text-black shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>

      {relatedPost.map((post) =>(
        <div key={post.title} className="text-black flex items-center w-full mb-4">
            <div className="w-16 flex-none">
                <img 
                 src={post.author.photo.url} 
                 alt={post.title}
                 className="align-middle rounded-full h-[60px] w-[60px]" />
                 <span>
                   {post.author.name}
                 </span>
            </div>
        </div>
      ))}
      
    </div>
  )
}

export default PostWidget