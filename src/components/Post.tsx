import { type Post } from "@/posts";

export function Post({ post }: { post: Post }) {
  return (
    <div className="border p-4 my-4 rounded">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p>{post.excerpt}</p>
    </div>
  );
}
