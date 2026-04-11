import { useEffect } from "react";
import { usePostStore } from "../store/postStore";

export default function Posts() {
  const { loading, posts, error, fetchPost } = usePostStore();

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  console.log(posts.length);
  return (
    <div>
      <p>
        {posts &&
          posts.map((post) => (
            <div key={post.id}>
              <ul>{post.title}</ul>
              <li>{post.body}</li>
            </div>
          ))}
      </p>
    </div>
  );
}
