import svg  from '../assets/svg.jpg'
import svg4 from '../assets/svg4.jpeg'
import svg1 from '../assets/svg1.jpeg'
import svg2 from '../assets/svg2.jpeg'
import svg3 from '../assets/svg3.png'
import svg5 from '../assets/svg5.png'
import svg6 from '../assets/svg6.png'
import svg7 from '../assets/svg7.jpeg'
import { Link } from 'react-router-dom'


const random:number = Math.floor(Math.random() * (7- 1 + 1)) + 1;
console.log(`svg${random}`);
interface BlogCardProps
{   
    id:string
    authorName:string;
    title:string,
    content:string;
    publishDate:string;
}
const BlogCard = ({authorName, title, content, publishDate, id}:BlogCardProps) => {
  return (<Link to={`/blog/${id}`}>
    <div className="border-b-2 border-slate-200 p-4 cursor-pointer">   
        <div className="flex">
                <Avatar />
           
            <div className="font-extralght text-sm pl-2 flex flex-col  justify-center">
                {authorName} 
            </div>
            <div className="flex flex-col justify-center pl-2"><Circle h={1} w={1} /></div>
            <div className="pl-2 flex justify-center flex-col font-thin text-sm text-slate-400">
                 {publishDate}
            </div>
            
             
        </div>
        <div className="text-xl font-semibold">
            {title}
        </div>
        <div className="text-md font-thin">
            {content.slice(0,100)+"....."}
        </div>
        <div className="text-slate-400 text-sm font-thin">
            {`${Math.ceil(content.length/100)} minute(s) read `}
        </div>
    </div>
    </Link>
  )
}
const images = [svg, svg1, svg2,svg3, svg4, svg5, svg6, svg7]
const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };
export function Avatar()
{
    const randomImage = getRandomImage();
    return(
     <div className="w-6 h-6 ">
        {/* <span className="font-extralight text-white text-2xl">
         {author.slice(0,1)}
        </span> */}
        <img className='rounded-full overflow-hidden' src={randomImage}  />  
     </div>
    )
}
type Hieght={
    h:number,
    w:number
}

export const  Circle = ({h,w}:Hieght)=>{
    return(
        <div className={`bg-black h-${h} w-${w} rounded-full overflow-auto border border-zinc-400`}></div>

    )
}
export default BlogCard