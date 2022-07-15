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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
                 src={post.featuredImage.url} 
                 alt={post.title}
                 className="align-middle rounded-full h-[60px] w-[60px]" />
            </div>
            <div className="flex-grow ml-4">
              <p className="text-gray-600 font-xs">
                {moment(post.createdAt).format('DD MMM YYYY')}
              </p>
              <Link href={`/posts/${post.slug}`} key={post.title} className='text-blue-900'>
                  {post.title}
              </Link>
            </div>
        </div>
      ))}
      
    </div>
  )
}

export default PostWidget