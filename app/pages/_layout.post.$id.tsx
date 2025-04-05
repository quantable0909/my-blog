import { useLoaderData } from 'react-router';
import { Link } from 'react-router';
import PostCard from '../common/components/PostCard';
import { allPosts } from '../common/data/posts';
import { getPostById, getRelatedPosts } from '../common/utils/posts';
import type { Post } from '../common/types';

export async function loader({ params }: { params: { id: string } }) {
  const post = getPostById(allPosts, params.id || '');

  if (!post) {
    throw new Response('Post not found', { status: 404 });
  }

  const relatedPosts = getRelatedPosts(allPosts, post, 3);

  return {
    post,
    relatedPosts,
  };
}

export default function PostDetailPage() {
  const { post, relatedPosts } = useLoaderData() as {
    post: Post;
    relatedPosts: Post[];
  };

  return (
    <div className="post-detail-page">
      <div className="container">
        <article className="post-content">
          <div className="post-header">
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
            <h1 className="post-title">{post.title}</h1>
          </div>

          <div className="post-featured-image">
            <img src={post.image || '/placeholder.svg'} alt={post.title} />
          </div>

          <div className="post-body">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu
              aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies
              lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet
              nisl.
            </p>

            <p>
              Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl,
              eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel
              ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl
              sit amet nisl. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam
              nisl, eu aliquam nisl nisl sit amet nisl.
            </p>

            <h2>Exploring the Beauty</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu
              aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies
              lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl sit amet
              nisl.
            </p>

            <p>
              Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl,
              eu aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel
              ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl
              sit amet nisl.
            </p>
          </div>
        </article>

        <section className="related-posts">
          <h2>You May Also Like</h2>
          <div className="posts-grid">
            {relatedPosts.map((relatedPost: Post) => (
              <PostCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
