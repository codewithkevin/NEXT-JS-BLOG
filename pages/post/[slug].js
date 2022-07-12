import React from 'react'
import {getPosts, getPostDetails} from '../../services'
import {PostDetail, Categories, PostWidget, Author, Comments, CommentForm} from '../../components'

const PostDetails = ({post}) => {

  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='col-span-1 lg:col-span-8'>
                <PostDetail post={post}/>
                <Author post={post.author} />
                <CommentForm slug={post.slug} />
                <Comments slug={post.slug}/>
            </div>
            <div className='col-span-1 lg:col-span-4'>
                <div className='relative lg:sticky top-8'>
                    <PostWidget />
                    <Categories /> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostDetails;

export async function getStaticProps ({params}) {
    const data = await getPostDetails(params.slug);
  
    return {
      props: {post: data}
    }
}

export async function getStaticPaths() {
    const posts = await getPosts();
    return {
      paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
      fallback: true,
    };
}