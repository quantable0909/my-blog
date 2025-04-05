import type { Post } from "../types"

export const getPostById = (posts: Post[], id: string): Post | null => {
  return posts.find((post) => post.id === id) || null
}

export const getRelatedPosts = (posts: Post[], currentPost: Post, limit: number): Post[] => {
  // Get posts with the same category, excluding the current post
  const sameCategoryPosts = posts.filter((post) => post.category === currentPost.category && post.id !== currentPost.id)

  // If we have enough posts with the same category, return them
  if (sameCategoryPosts.length >= limit) {
    return sameCategoryPosts.slice(0, limit)
  }

  // Otherwise, get other posts to fill the limit
  const otherPosts = posts.filter((post) => post.category !== currentPost.category && post.id !== currentPost.id)

  return [...sameCategoryPosts, ...otherPosts.slice(0, limit - sameCategoryPosts.length)]
}

