import { createContext, useCallback, useEffect, useState } from "react";
import PostInDB from "../Appwrite/posts";


export const BlogPostsContext = createContext();

export function BlogPostsProvider({children}){

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null)
    const [isError, setIsError] = useState(null)

    const fetchData =  useCallback(async() => {
        setIsLoading(true)
        try {
            const posts = await PostInDB.getPosts()
            const newPostFirst = posts.documents.reverse()
            setData(newPostFirst)
        } catch (error) {
            setIsError('Something went wrong :: ', error)
        }
    }, []) 
    
    return <BlogPostsContext.Provider value={[isLoading, data, isError, fetchData]} >
        {children}
    </BlogPostsContext.Provider>
}