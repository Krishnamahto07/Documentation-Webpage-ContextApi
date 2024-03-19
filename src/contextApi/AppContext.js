// 1.  Create the context
import {createContext, useState} from 'react';

export const AppContext = createContext();

// 2.  Create Provider
const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";
export default function AppContextProvider({children})
{
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [totalPages,setTotalPages] = useState(null);
    const [page , setPage] = useState(1);

    async function fetchPost(page = 1){
        try
        {
            setLoading(true)
            const temp = await fetch(`${baseUrl}?page=${page}`)
            const ans = await temp.json();
            // console.log("data =",ans);
            setPosts(ans.posts)
            setTotalPages(ans.totalPages)
            setPage(page)
            
        }catch(err)
        {
            console.log(err);
            setPosts([]);
            setPage(null);
        }
        setLoading(false)
    }
    function handlePageChange(page){
        setPage(page);
        fetchPost(page);
    }
    
    // 3. wrap into Provider

    const value = {
        loading,
        setLoading,
        page,
        setPage,
        setPosts,
        setTotalPages,
        fetchPost,
        handlePageChange,
        posts,
        totalPages
    }

    return  <AppContext.Provider value={value}>
                {children}
            </AppContext.Provider>

}
