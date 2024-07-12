import axios from "axios";
import { useEffect, useState} from "react";
import { BACKEND_URL } from "../config";
import BlogCard from "../components/BlogCard";

export interface Blog{
    content:string,
    title:string,
    id:string,
    author:{
        name:string
    }
}

export const useBlogs = () =>{
    const[loading, setLoading] = useState(true);
    const[blogs, setBlogs] = useState<Blog[]>([]);


    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(response=>{
            setLoading(false);
            setBlogs(response.data.blogs);
            
        })

    },[]);

    return{
        loading,
        blogs
    }
}


export const useBlog = ({id}:{id:string}) =>{
    const[loading, setLoading] = useState(true);
    const[blog, setBlog] = useState<Blog>();


    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(response=>{
            setLoading(false);
            setBlog(response.data.blog);
            
        })

    },[id]);

    return{
        loading,
        blog
    }

}