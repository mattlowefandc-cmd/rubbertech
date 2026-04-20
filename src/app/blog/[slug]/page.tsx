import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug } from "@/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return { title: "Article Not Found | RUBBER TECH" };
  }
  
  return {
    title: `${post.seoTitle} | RUBBER TECH`,
    description: post.seoDescription,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-4 font-mono text-[11px] text-[#999999] uppercase tracking-[1.4px] mb-16">
          <Link href="/" className="hover:text-black transition-colors">HOME</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-black transition-colors">EDITORIAL</Link>
          <span>/</span>
          <span className="text-black">{post.category}</span>
        </nav>

        {/* Article Header */}
        <header className="mb-20">
          <div className="flex items-center gap-6 mb-8 font-mono text-[12px] uppercase tracking-[2px]">
            <span className="text-black">{post.date}</span>
            <span className="text-[#999999]">[{post.category}]</span>
          </div>
          <h1 className="font-display text-black uppercase leading-[1.0] mb-8" style={{ fontSize: "clamp(3rem, 6vw, 90px)" }}>
            {post.title}
          </h1>
          <p className="font-body text-[#111111] text-[20px] lg:text-[24px] leading-relaxed italic border-l-2 border-black/10 pl-6 mb-12">
            {post.excerpt}
          </p>
          <div className="font-mono text-[#999999] text-[12px] uppercase tracking-[2px]">
            WRITTEN BY: <span className="text-black">{post.author}</span>
          </div>
        </header>

        {/* Article Content Engine */}
        <article 
          className="prose prose-lg lg:prose-xl max-w-none prose-headings:font-display prose-headings:uppercase prose-p:font-body prose-p:leading-relaxed prose-p:text-[#444] prose-a:text-black prose-a:underline prose-li:font-body prose-strong:text-black"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* SEO External Authority Linking Layer */}
        {post.sourceLink && (
          <div className="mt-32 pt-12 border-t border-black/10 text-center">
             <span className="font-mono text-[#999999] text-[11px] uppercase tracking-[2px] block mb-4">VERIFIED EXTERNAL ORIGINATOR</span>
             <a 
                href={post.sourceLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-display text-[24px] text-black uppercase hover:opacity-60 transition-opacity border-b-2 border-black/20 pb-1"
             >
                {post.sourceName || "Official Origin Link"}
             </a>
             <p className="font-mono text-[#999999] text-[10px] mt-6 max-w-sm mx-auto uppercase">LINKING TO HIGH-AUTHORITY EXTERNAL VALIDATORS ENSURES ALGORITHMIC TRUST AND STRUCTURAL INTEGRITY FOR SEARCH ENGINE INDEXING PROTOCOLS.</p>
          </div>
        )}

      </div>
    </main>
  );
}
