import type Post from "../types/post.ts";

export async function getAll(): Promise<Post[]> {
  // 1. fetch의 응답을 json으로 변환하면 바로 PostsItem[] 타입의 객체가 됩니다.
  const response = await fetch("http://localhost:3000/posts");
  const data: Post[] = await response.json();

  return data;
}

export async function getOne(id: number): Promise<Post> {
  const response = await fetch(`http://localhost:3000/posts/${id}`);
  const data: Post = await response.json();

  return data;
}

export async function uploadPost(post: Omit<Post, "id">): Promise<Post> {
  const response = await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  return response.json();
}

export async function deletePost(id: number): Promise<void> {
  await fetch(`http://localhost:3000/posts/${id}`, {
    method: "DELETE",
  });
}