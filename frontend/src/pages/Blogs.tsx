import React from 'react'
import BlogCard from '../components/BlogCard'
import AppBar from '../components/AppBar';
import{ useBlogs } from '../hooks/index'


const Blogs = () => {
    const today = new Date();
    const{loading, blogs} = useBlogs();
    
    if(loading)
    {
        return <div className='h-screen flex justify-center items-center'>
            Loading...............
        </div>
    }
  return (
    <div>
        <AppBar />
            
        <div className='flex justify-center'>
            
            <div className='max-w-xl'>
                {blogs.map(blog=>
                <BlogCard
                            id={blog.id}       
                            authorName={blog.author.name || 'Anonymous'}
                            title={blog.title}
                            content={blog.content}
                            publishDate={today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear()}   />

                            
                )}
                            {/* <BlogCard
                        id={blog.id}
                        authorName={'Gurjot Singh'}
                                 title={"A Big Bang theory"}
                                content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, nisi at sagittis elementum, est velit ultricies turpis, eu pellentesque urna dui pellentesque tellus. Aliquam tristique vel nunc et eleifend. Proin in eleifend eros, at venenatis dui. Sed sollicitudin aliquet mattis. Etiam nunc nulla, placerat elementum ultricies ut, rhoncus tempus tortor. Ut ac scelerisque ipsum. Curabitur id felis ut ex venenatis scelerisque ac non augue. Sed leo urna, dictum et odio imperdiet, pretium ultrices sapien. Maecenas faucibus sagittis mollis. Fusce nunc ex, auctor in consectetur vel, aliquam in sem.   Phasellus bibendum sem nunc, vel tincidunt dui aliquam ut. Duis in ipsum nec odio dictum condimentum sit amet id ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce non mauris ullamcorper, faucibus dolor non, varius lacus. Curabitur pretium magna justo, a porttitor enim suscipit vitae. Aenean lobortis massa in mauris sodales fringilla. Sed sagittis tristique rhoncus. Aenean dictum massa mi, molestie porta eros accumsan in. Duis lobortis in odio nec vehicula. Cras pellentesque ultrices urna nec elementum. Pellentesque arcu nisl, interdum vel velit non, lobortis condimentum dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus vitae diam sed mauris interdum euismod vel quis diam"}
                                publishDate={today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear()}
        
             />
             <BlogCard
             id={blogs.id}   
                        authorName={'Gurjot Singh'}
                                 title={"A Big Bang theory"}
                                content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, nisi at sagittis elementum, est velit ultricies turpis, eu pellentesque urna dui pellentesque tellus. Aliquam tristique vel nunc et eleifend. Proin in eleifend eros, at venenatis dui. Sed sollicitudin aliquet mattis. Etiam nunc nulla, placerat elementum ultricies ut, rhoncus tempus tortor. Ut ac scelerisque ipsum. Curabitur id felis ut ex venenatis scelerisque ac non augue. Sed leo urna, dictum et odio imperdiet, pretium ultrices sapien. Maecenas faucibus sagittis mollis. Fusce nunc ex, auctor in consectetur vel, aliquam in sem.   Phasellus bibendum sem nunc, vel tincidunt dui aliquam ut. Duis in ipsum nec odio dictum condimentum sit amet id ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce non mauris ullamcorper, faucibus dolor non, varius lacus. Curabitur pretium magna justo, a porttitor enim suscipit vitae. Aenean lobortis massa in mauris sodales fringilla. Sed sagittis tristique rhoncus. Aenean dictum massa mi, molestie porta eros accumsan in. Duis lobortis in odio nec vehicula. Cras pellentesque ultrices urna nec elementum. Pellentesque arcu nisl, interdum vel velit non, lobortis condimentum dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus vitae diam sed mauris interdum euismod vel quis diam"}
                                publishDate={today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear()}
        
             />
             <BlogCard
                            id={blog.id}
                        authorName={'Gurjot Singh'}
                                 title={"A Big Bang theory"}
                                content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, nisi at sagittis elementum, est velit ultricies turpis, eu pellentesque urna dui pellentesque tellus. Aliquam tristique vel nunc et eleifend. Proin in eleifend eros, at venenatis dui. Sed sollicitudin aliquet mattis. Etiam nunc nulla, placerat elementum ultricies ut, rhoncus tempus tortor. Ut ac scelerisque ipsum. Curabitur id felis ut ex venenatis scelerisque ac non augue. Sed leo urna, dictum et odio imperdiet, pretium ultrices sapien. Maecenas faucibus sagittis mollis. Fusce nunc ex, auctor in consectetur vel, aliquam in sem.   Phasellus bibendum sem nunc, vel tincidunt dui aliquam ut. Duis in ipsum nec odio dictum condimentum sit amet id ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce non mauris ullamcorper, faucibus dolor non, varius lacus. Curabitur pretium magna justo, a porttitor enim suscipit vitae. Aenean lobortis massa in mauris sodales fringilla. Sed sagittis tristique rhoncus. Aenean dictum massa mi, molestie porta eros accumsan in. Duis lobortis in odio nec vehicula. Cras pellentesque ultrices urna nec elementum. Pellentesque arcu nisl, interdum vel velit non, lobortis condimentum dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus vitae diam sed mauris interdum euismod vel quis diam"}
                                publishDate={today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear()}
        
             />
             <BlogCard
                                id={blog.id}
                        authorName={'Gurjot Singh'}
                                 title={"A Big Bang theory"}
                                content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium, nisi at sagittis elementum, est velit ultricies turpis, eu pellentesque urna dui pellentesque tellus. Aliquam tristique vel nunc et eleifend. Proin in eleifend eros, at venenatis dui. Sed sollicitudin aliquet mattis. Etiam nunc nulla, placerat elementum ultricies ut, rhoncus tempus tortor. Ut ac scelerisque ipsum. Curabitur id felis ut ex venenatis scelerisque ac non augue. Sed leo urna, dictum et odio imperdiet, pretium ultrices sapien. Maecenas faucibus sagittis mollis. Fusce nunc ex, auctor in consectetur vel, aliquam in sem.   Phasellus bibendum sem nunc, vel tincidunt dui aliquam ut. Duis in ipsum nec odio dictum condimentum sit amet id ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce non mauris ullamcorper, faucibus dolor non, varius lacus. Curabitur pretium magna justo, a porttitor enim suscipit vitae. Aenean lobortis massa in mauris sodales fringilla. Sed sagittis tristique rhoncus. Aenean dictum massa mi, molestie porta eros accumsan in. Duis lobortis in odio nec vehicula. Cras pellentesque ultrices urna nec elementum. Pellentesque arcu nisl, interdum vel velit non, lobortis condimentum dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus vitae diam sed mauris interdum euismod vel quis diam"}
                                publishDate={today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear()}
        
             /> */}

            </div>
        </div> 
</div>
  )
}

export default Blogs