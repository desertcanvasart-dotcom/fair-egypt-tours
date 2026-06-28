import Link from "next/link";
import type { Post } from "@/lib/blog";
import { ArrowRight } from "./icons";
import { getLocale } from "@/lib/locale";
import { localeHref } from "@/lib/i18n";
import { t } from "@/lib/messages";

export default async function PostCard({ post, delay = 1 }: { post: Post; delay?: number }) {
  const locale = await getLocale();
  const m = t(locale).blog;
  const cat = (m.cats as Record<string, string>)[post.category] ?? post.category;
  return (
    <Link className="bcard reveal" data-delay={delay} href={localeHref(locale, `/blog/${post.slug}`)}>
      <div className="bcard__media">
        <div className="img" style={{ backgroundImage: `url('${post.image}')` }} />
        <span className="bcard__cat">{cat}</span>
      </div>
      <div className="bcard__b">
        <div className="bcard__meta">
          <time dateTime={post.isoDate}>{post.date}</time><span className="dot" /><span>{post.readTime}</span>
        </div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <span className="bcard__more">{m.readArticle} <ArrowRight size={15} /></span>
      </div>
    </Link>
  );
}
