import React from 'react'
import { useBlog } from '../hooks'
import { useParams } from 'react-router-dom';
import Fullpage from '../components/fullpage';


type idtype ={
  id: string
}

const Blog = () => {
  const {id} = useParams() as idtype;
  const {loading, blog} = useBlog(
    {
      id:id
    }
  );
  if (loading) {
    return <div>loading...</div>
  }

  if (!blog) {
    return <div>Blog not found</div>; // Handle the case when blog is undefined
  }
 

  return (
    <div>
         <Fullpage blog={blog} />
      </div>
  )
}

export default Blog