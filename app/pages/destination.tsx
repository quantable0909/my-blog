import { useLoaderData } from 'react-router';
import PostCard from '../common/components/PostCard';
import { allPosts } from '../common/data/posts';
import { filterPostsByCategory } from '../common/utils/filters';
import type { Post } from '../common/types';

export async function loader() {
  const destinationPosts = filterPostsByCategory(allPosts, 'DESTINATION');
  return {
    posts: destinationPosts,
  };
}

export default function DestinationPage() {
  const { posts } = useLoaderData() as { posts: Post[] };

  return (
    <div className="category-page destination-page">
      <div className="container">
        <div className="page-header">
          <h1>Destinations</h1>
          <p>
            Explore guides and stories from incredible destinations around the
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
