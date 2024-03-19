import { useContext } from "react"
import { AppContext } from "../contextApi/AppContext"
export default function Buttons(){
    const {page,totalPages,fetchPost} = useContext(AppContext);
    return (
        <div className="w-full flex items-center justify-between gap-[200px] py-2 border-2 px-2 shadow-lg">
            <div className="w-full flex font-semibold">
                {
                    page > 1 &&
                    (
                        <button className="border-2 px-3 shadow-md" onClick={()=>fetchPost(page-1)}>
                            Previous
                        </button>
                    )
                }
                {
                    page < totalPages &&
                    (
                        <button className="border-2 px-3 shadow-md" onClick={()=>fetchPost(page+1)}>Next</button>
                    )
                }
            </div>
            <p className="w-full">Page {page} of {totalPages}</p>
        </div>
    )
}