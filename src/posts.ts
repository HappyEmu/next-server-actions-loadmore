export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
}

const posts: Post[] = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  title: `Post ${i}`,
  excerpt: `This is the excerpt for post ${i}`,
  slug: `post-${i}`,
}));

export async function getPostsPage(page = 1, limit = 10): Promise<[Post[], boolean]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const offset = (page - 1) * limit;
  const pageDocs = posts.slice(offset, offset + limit);
  const hasMore = posts.length > offset + limit;

  return [pageDocs, hasMore];
}
