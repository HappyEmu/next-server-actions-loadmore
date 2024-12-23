'use client'

import { type Post } from "@/posts";
import { Post as PostComponent } from "@/components/Post";
import { useLoadMore } from "@/hooks";
import LoadMore from "@/components/LoadMore";

interface Props {
  loadMoreAction: (page: number) => Promise<[Post[], boolean]>
  disabled?: boolean
}

export function LoadMorePosts({ loadMoreAction, disabled }: Props) {
  const { fetchMore, items, hasMore, isLoading } = useLoadMore({ loadMoreAction })

  return (
    <LoadMore
      caption="Load More Posts"
      disabled={disabled}
      isLoading={isLoading}
      hasMore={hasMore}
      onLoadMore={fetchMore}
      items={items}
      renderItem={(post, index) => <PostComponent post={post} key={index} />}
    />
  )
}
