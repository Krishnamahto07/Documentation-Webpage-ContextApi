import { useContext } from "react";
import { AppContext } from "../contextApi/AppContext";
import '../App.css';
export default function Blog(){
    const {posts,loading} = useContext(AppContext);

    return (
        <div className="w-full h-full flex justify-center items-center py-2 mt-[60px]">
        <div className="w-11/12 max-w-[450px]">
        {
          loading ? (<div className='spinner'></div>):
          (
            posts.length === 0 ? (<h1>No Data found</h1>):
            (
              posts.map((post)=>(
                <div className="p-1" key={post.id}>
                    <h2 className="font-bold text-md">{post.title}</h2>
                    <p className="text-sm">By Mr.{post.author}on {post.category}</p>
                    <p className="text-xs">Posted on {post.date}</p>
                    <p>{post.content}</p>
                    <div className="flex  flex-wrap gap-2">
                    {post.tags.map((tag,index)=>(<p key={index} className="text-blue-900 font-semibold text-xs underline">#{tag}</p>))}
                    </div>
                    <div className="h-[2px] w-full bg-slate-400 rounded-md my-2"></div>
                </div>
              ))
            )
          )
        }
        </div>
      </div>
    )
}