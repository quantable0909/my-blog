import { Link } from 'react-router';
import type { Post } from '../types';

interface TrendingNewsProps {
  posts: Post[];
}

export default function TrendingNews({ posts }: TrendingNewsProps) {
  return (
    <section className="trending-news">
      <div className="section-header">
        <span className="section-label">Popular Posts</span>
        <h2 className="section-title">Trending News</h2>
      </div>

      <div className="trending-grid">
        {posts.map((post) => (
          <article key={post.id} className="trending-post">
            <Link to={`/post/${post.id}`} className="trending-image">
              <img src={post.image || '/placeholder.svg'} alt={post.title} />
            </Link>
            <div className="trending-content">
              <div className="post-meta">
                <span className="post-date">{post.date}</span>
                <span className="post-separator">|</span>
                <Link
                  to={`/${post.category.toLowerCase()}`}
                  className="post-category"
                >
                  {post.category}
                </Link>
              </div>
              <h3 className="trending-title">
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
