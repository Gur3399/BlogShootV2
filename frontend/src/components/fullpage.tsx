import React from 'react'
import {Blog} from '../hooks'
import AppBar from './AppBar'
import { Avatar } from './BlogCard';

const Fullpage = ({blog}:{blog:Blog}) => {
    const today = new Date();
  return (
     <div className=''>
        <AppBar />
       
        <div className='grid grid-cols-12   px-14 pt-12 '>
        <div className='col-span-8 '>
            <div className='overflow-hidden'>
            <div className='text-6xl font-extrabold'>
                        {blog.title}
                        
               </div>

            </div>
                
               <div className='text-slate-500 pt-2'>
                    {`Posted on ${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`}
               </div>
               <div className='flex  pb-2 '>
                    <p>{blog.content}</p>
               </div>
        </div>
      

        <div className='col-span-4  font-base  text-slate-400 pr-6'>
        
            Author
               
                <div className='flex flex-row items-center  gap-2'>
                    <div className='inline-block'>
                        <Avatar />
                    </div>
   
                    <div  className='font-extrabold text-black'>
    
                            {blog.author.name ||"Anonymous"}
                            <div className='text-xs font-thin text-slate-400'>
                                 Random catch phrase i would have stored for user, but for now leaving it
                            </div>
                        
                    </div>
               
                </div>

                    
        
    </div>

        </div>
       </div>


  
 
    
  )
}

export default Fullpage