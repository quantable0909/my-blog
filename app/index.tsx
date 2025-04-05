import { useLoaderData } from 'react-router';
import FeaturedPosts from './common/components/FeaturedPosts';
import TrendingNews from './common/components/TrendingNews';
import { featuredPosts, trendingPosts } from './common/data/posts';
import type { Post } from './common/types';

export async function loader() {
  return {
    featured: featuredPosts,
    trending: trendingPosts,
  };
}

export default function HomePage() {
  const { featured, trending } = useLoaderData() as {
    featured: Post[];
    trending: Post[];
  };

  return (
    <div className="home-page">
      <div className="container">
        <FeaturedPosts posts={featured} />
        <TrendingNews posts={trending} />
      </div>
    </div>
  );
}
