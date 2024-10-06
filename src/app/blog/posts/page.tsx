import { posts } from "@/app/lib/placeholder-data.js";
import Post from "../../ui/components/posts/Post";
export default function Page() {
  return (
    <>
      <h1>Posts</h1>

      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </>
  );
}
