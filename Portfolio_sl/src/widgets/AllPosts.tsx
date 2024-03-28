import { useState, useEffect } from "react";
import sanityClient from "../Client";
import Article from '../classes/Article';

interface Post {
    title:string;
    _id: string;
    publishedAt:string;
    slug:string;
}
const Posts = ({query}:{query:string}) => {
    const [posts, setPosts] = useState<Post[] | null>(null); 
    useEffect(() => {
        sanityClient.fetch(
            query
        ).then((data) => setPosts(data)).catch(console.error);
    });
    return <div>
     
        {posts &&
					posts.map((post,index) => (
						<Article key={post._id} post={post} bgGrey={index%2 == 0} />
					))}
 
    </div>
}
export default Posts;