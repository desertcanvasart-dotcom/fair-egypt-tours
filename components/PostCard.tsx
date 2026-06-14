import Link from "next/link";
import type { Post } from "@/lib/blog";
import { ArrowRight } from "./icons";

export default function PostCard({ post, delay = 1 }: { post: Post; delay?: number }) {
  return (
    <Link className="bcard reveal" data-delay={delay} href={`/blog/${post.slug}`}>
      <div className="bcard__media">
        <div className="img" style={{ backgroundImage: `url('${post.image}')` }} />
        <span className="bcard__cat">{post.category}</span>
      </div>
      <div className="bcard__b">
        <div className="bcard__meta">
          <time dateTime={post.isoDate}>{post.date}</time><span className="dot" /><span>{post.readTime}</span>
        </div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <span className="bcard__more">Read article <ArrowRight size={15} /></span>
      </div>
    </Link>
  );
}
