import type Post from "../../data/Post.ts";
import {getAll} from "../../api/api.ts";
import PostsItem from "./PostsItem.tsx";
import {useEffect, useState} from "react";

const Posts = () => {

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        getAll().then((data) => {
            setPosts(data);
        });
    }, []);

    return (
        <div className="posts-container">
            {posts.map((post, index) => (
                <PostsItem key={index} post={post} />
            ))}
        </div>
    );

}

export default Posts;