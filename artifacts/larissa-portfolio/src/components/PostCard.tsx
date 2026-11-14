import { ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import type { BlogPost } from '../data/posts';
import { copy } from '../data/config';

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="post-card">
      <div className="post-meta"><span>{copy.postCategory}</span><span>{post.date}</span></div>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <span style={{ marginTop: 'auto', paddingTop: 16, color: '#ffd43b' }} aria-hidden="true">
        <ArrowUpRight size={15} />
      </span>
    </Link>
  );
}
