import type Post from "../../data/Post.ts";
import {getAll} from "../../api/api.ts";
import PostsItem from "./PostsItem.tsx";
import {useEffect, useState} from "react";
import * as S from "./Post.style.ts";

const Posts = () => {

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        getAll().then((data) => {
            setPosts(data);
        });
    }, []);

    return (
        <S.PostsContainer>
            {posts.map((post, index) => (
                <PostsItem key={index} post={post} />
            ))}
        </S.PostsContainer>
    );

}

export default Posts;