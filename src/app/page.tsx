import { getPostsPage } from "@/posts";
import { LoadMorePosts } from "@/components/LoadMorePosts";
import { Post } from "@/components/Post";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default async function Home() {
  return (
    <div className="container mx-auto my-8">
      <div className="mx-8">
        <h1 className="text-2xl font-bold">
          Posts
        </h1>

        <Suspense fallback={<PostsSkeleton/>}>
          <Posts/>
        </Suspense>
      </div>
    </div>
  );
}

async function Posts() {
  const pageSize = 4;
  const [posts, hasMore] = await getPostsPage(1, pageSize);

  const loadMorePostsAction = async (page: number) => {
    'use server'
    return getPostsPage(page, pageSize);
  }

  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post}/>
      ))}

      <LoadMorePosts loadMoreAction={loadMorePostsAction} disabled={!hasMore}/>
    </>
  )
}

function PostsSkeleton({count = 4}: { count?: number }) {
  return (
    <>
      {Array.from({length: count}).map((_, i) => (
        <div key={i} className="border rounded p-4 my-4">
          <Skeleton className="w-[100px] h-[20px] rounded-full"/>
          <Skeleton className="w-[400px] h-[1rem] rounded-full mt-4"/>
        </div>
      ))}
    </>
  )
}
