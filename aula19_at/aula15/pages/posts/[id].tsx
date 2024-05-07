// pages/post/[id].tsx
interface Post{
    userId  : number;
    id      : number;
    title   : string;
    body    : string;
}

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchData } from "../../utils/api";


const PostPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [post,setPost] = useState<Post | null>(null)

    useEffect(() =>{
        const fetchPost = async () =>{
            if (id){
                const data = await fetchData(`posts/${ id }`);
                if(data){
                    setPost(data);
                }
            }
        }
        fetchPost();
    },[id])
    if(!post){
        return <div>Carregando...</div>
    }
    return(
        <>
            <h1>{ post.title }</h1>
            <p>{ post.body }</p>
        </>
    )
}
export default PostPage;