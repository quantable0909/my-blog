import { useLoaderData } from 'react-router';
import PostCard from '../common/components/PostCard';
import { allPosts } from '../common/data/posts';
import { filterPostsByCategory } from '../common/utils/filters';
import type { Post } from '../common/types';

export async function loader() {
  const travelPosts = filterPostsByCategory(allPosts, 'TRAVEL');
  return {
    posts: travelPosts,
  };
}

export default function TravelPage() {
  const { posts } = useLoaderData() as { posts: Post[] };

  return (
    <div className="category-page travel-page">
      <div className="container">
        <div className="page-header">
          <h1>Travel</h1>
          <p>
            Discover amazing destinations and travel experiences around the
            world.
          </p>
        </div>

        <div className="posts-grid">
          {posts.map((post: Post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
