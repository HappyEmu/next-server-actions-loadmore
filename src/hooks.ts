import React, { useCallback } from 'react'

interface Props<T> {
  loadMoreAction: (page: number) => Promise<[T[], boolean]>
}

export function useLoadMore<T>({ loadMoreAction }: Props<T>) {
  const [items, setItems] = React.useState<T[]>([])
  const [currentPage, setCurrentPage] = React.useState(1)
  const [hasMore, setHasMore] = React.useState(true)
  const [isLoading, setLoading] = React.useState(false)

  const fetchMore = useCallback(() => {
    async function loadMoreItems() {
      setLoading(true)
      const [newItems, hasMore] = await loadMoreAction(currentPage + 1)

      setHasMore(hasMore)
      setItems([...items, ...newItems])
      setCurrentPage(page => page + 1)
      setLoading(false)
    }

    loadMoreItems()
  }, [items, loadMoreAction, currentPage])

  return {
    hasMore,
    items,
    fetchMore,
    isLoading,
  }
}
