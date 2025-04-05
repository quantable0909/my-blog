import type { Post } from "../types"

export const filterPostsByCategory = (posts: Post[], category: string): Post[] => {
  return posts.filter((post) => post.category.toUpperCase() === category.toUpperCase())
}

