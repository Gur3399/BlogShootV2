import React, { ChangeEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {signInSchema, signUpSchema }from "@singhtech/schema-common-blogshoot"
import axios  from 'axios'
import { BACKEND_URL } from '../config'


interface LabelInputType{
    label:string,
    placeholder:string,
    onChange:(e: ChangeEvent<HTMLInputElement>)=>void,
    type?:string
}
interface AuthType{
    type:"signin"|"signup"
 }



// type SignUpSchemaType = ZodType<typeof signUpSchema>;
// type SignInSchemaType = ZodType<typeof signInSchema>;
// {type: "signup" | "signin"}

const Auth = ({type}:AuthType) => {
   const navigate = useNavigate();
    const initState = type === "signin"?{email:'',password:''} as signInSchema
                        :{email:'', password:'',name:''} as signUpSchema



    const [postInputs, setPostInputs] = useState({initState});
    const validateInputs= () =>{
       try{const res = type === "signin" ? signInSchema.parse(postInputs) : signUpSchema.parse(postInputs)
            return res;}
        catch(err){
            return false;
        }
        
    }
    // const [postInputs, setPostInputs] = useState<signUpSchema>({
    //     name:"",
    //     email:"",
    //     password:"",
    // });
        

    const sendRequest = async () => {
        const endpoint = type === 'signin' ? 'signin' : 'signup';
        console.log()
       try{ 
       
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${endpoint}`,{
                ...postInputs
              });
              console.log(response);
              const jwt= response.data.jwt;
              localStorage.setItem('token', jwt);
              navigate("/blogs")
              
  
    }
        catch(error){
            console.log(error);
        }
    }
  return (
    
    <div className='h-screen flex justify-center flex-col'>
        <div className="flex justify-center">
            <div className='w-80 '>
                <div className='text-3xl text-center font-bold'>
                    {type === 'signin' ?"Log In":"Create an account"}
                 </div>
                 <div className='text-slate-400 text-center mb-4'>
                    {type === 'signin' ?"Don't have an account?":"Already have an account?"}
                    <Link 
                        className='pl-2 underline' 
                        to={type === 'signin'?"/signup":"/signin"}>
                        {type === 'signin'?"Sign up" : "Log in"}
                    </Link>
                </div>
                {type === "signup" && <LabelInput label={'Name'} type={'text'} placeholder={'John'} onChange={async(e)=>{
                        setPostInputs(c=>({
                            ...c,  //all the keys from orig obj ...spread oprtr
                            name:e.target.value,
                        }))
                }} />}

                <LabelInput label={'Email'} type={'email'} placeholder={'John@example.com'} onChange={(e)=>{
                        setPostInputs(c=>({
                            ...c,  //all the keys from orig obj ...spread oprtr
                            email:e.target.value,
                        }))
                }} />
                <LabelInput  label={'Password'} type={'password'} placeholder={'********'} onChange={(e)=>{
                        setPostInputs(c=>({ 
                            ...c,  //all the keys from orig obj ...spread oprt
                            password:e.target.value,
                            
                        }))
                       
                }} />
               
                
                <button onClick = {sendRequest} type="button"  className='text-white focus:ring-4 focus:ring-slate-600  bg-gray-900 font-medium rounded-lg w-full mt-4 py-2 me-2 block'>{type === "signup" ? "Sign Up" : "Sign In"}</button>
            </div>
        </div>
    </div>

  )
}


function LabelInput({label, placeholder, onChange, type}:LabelInputType )
{
    return<div>
        <label  className='block mb-2 mt-1 text-sm font-bold text-gray-900 dark:text-white '>{label}</label>
        <input  onChange={onChange}type={type}
        className="bg-gray-50 border
         border-gray
          text-gray-900 
          text-sm rounded-lg
          focus:ring-4
           focus:ring-slate-500
           focus:border-slate-600
            block w-full p-2.5" placeholder={placeholder}required />
    </div>

}


export default Auth