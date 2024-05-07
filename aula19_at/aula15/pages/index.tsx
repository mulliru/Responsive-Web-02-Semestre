// pages/index.tsx

import { useEffect, useState } from "react";
import { fetchData } from "../utils/api";
import Link from "next/link";

const HomePage = () => {

    const[posts,setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await fetchData('posts');
            if(data){
                setPosts(data)
            }
        }
        fetchPosts();
    },[]);

    return(
        <>
            <h1>Home Page</h1>
            <ul>
                {
                    posts.map((post : any)=>(
                        <li key={ post.id }>
                            <Link href={`/posts/${ post.id }`}>
                                { post.title }
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
export default HomePage;