import React from 'react'
import { Button } from "@/components/ui/button";

interface Props<T> {
  caption: string
  hasMore: boolean
  onLoadMore: () => void
  items: T[]
  renderItem: (item: T, index: number) => React.ReactNode
  disabled?: boolean
  isLoading?: boolean
}

export default function LoadMore<T>({caption, hasMore, items, renderItem, onLoadMore, disabled, isLoading}: Props<T>) {
  return (
    <>
      {items.map((item, index) => renderItem(item, index))}
      <Button onClick={onLoadMore} disabled={!hasMore || disabled} loading={isLoading}>
        {caption}
      </Button>
    </>
  )
}
