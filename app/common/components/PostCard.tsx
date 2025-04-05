import { Link } from 'react-router';
import type { Post } from '../types';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const { id, title, image, date, category } = post;

  return (
    <article className="post-card">
      <Link to={`/post/${id}`} className="post-image">
        <img src={image || '/placeholder.svg'} alt={title} />
      </Link>
      <div className="post-meta">
        <span className="post-date">{date}</span>
        <span className="post-separator">|</span>
        <Link to={`/${category.toLowerCase()}`} className="post-category">
          {category}
        </Link>
      </div>
      <h2 className="post-title">
        <Link to={`/post/${id}`}>{title}</Link>
      </h2>
    </article>
  );
}
