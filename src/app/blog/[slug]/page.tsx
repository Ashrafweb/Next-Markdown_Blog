import { getAllSlugs, getPostBySlug, BlogPost } from "@/lib/posts";
import Link from "next/link";
import { FaBackward } from "react-icons/fa6";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSlugs().map(({ slug }) => ({ slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post: BlogPost = getPostBySlug(slug);

  return (
    <div className='p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md'>
      <Link
        href='/blog'
        passHref
        className='flex justify-center gap-2 mb-4 hover:text-blue-500 dark:hover:text-blue-400'
      >
        <FaBackward /> GO Back
      </Link>
      <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
        {post.title}
      </h1>
      <p className='text-gray-500 dark:text-gray-400 text-sm mb-6'>
        {post.date}
      </p>
      <div className='prose prose-lg dark:prose-invert max-w-prose'>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }} />
      </div>
    </div>
  );
}
