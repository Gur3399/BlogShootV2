import React from 'react'
import {Link} from 'react-router-dom'

import {Avatar, Circle} from './BlogCard'
const AppBar = () => {
  return (
    
    <div className=' flex justify-between px-10 border-b w- py-2'>
    <div className='flex gap-2 '>
        <div className='relative '>
                <div className='absolute left-0 top-0 border-cyan-200 '> <Circle h={6} w={6} /></div>
                <div className='absolute left-3 top-0  border-zinc-100 opacity-80 '> <Circle h={6} w={6} />  </div>
                <Link to={"/blogs"}>
                <div className='absolute left-9 '>
                    Blogshoot
                </div>
             </Link>
        </div>
     
         
      
        </div>
        <div className='flex flex-row gap-4'>
        <button className='bg-white text-black  rounded-full px-3 border border-slate-500 font-bold hover:bg-black hover:text-white hover:border-none hover:' >+ Publish</button>
        <Avatar />

        </div>
        

    </div>
  )
}

export default AppBar