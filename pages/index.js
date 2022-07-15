import Head from 'next/head'
import {PostCard, PostWidget, Categories, Navbar} from '../components/index'
import {getPosts} from '../services'


export default function Home({posts}) {

  const data =  posts.map((post) => (
    <PostCard post={post.node} key={post.title} />
  ))

  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className="hidden lg:col-span-1 lg:flex">
            <Navbar />
        </div>
        <div className='lg:col-span-8 col-span-1 lg:grid grid-cols-2 gap-4'>
            {data}
        </div>
        <div className="lg:col-span-3 col-span-1">
            <div className="lg:sticky relative top-8">
               <PostWidget />
               <Categories />
            </div>
        </div>
      </div>
      

      
    </div>
  )
}

export async function getStaticProps () {
  const posts = (await getPosts()) || [];

  return {
    props: {posts}
  }
}