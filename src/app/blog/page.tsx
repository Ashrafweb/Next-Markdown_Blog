import Link from "next/link";
import { getAllPosts, BlogPost } from "@/lib/posts";

export default function Home() {
  const posts: BlogPost[] = getAllPosts();

  return (
    <div className='p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md'>
      <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-6'>
        Blog
      </h1>
      <ul className='space-y-4'>
        {posts.map((post) => (
          <li key={post.slug} className='transition duration-300 ease-in-out'>
            <Link
              href={`/blog/${post.slug}`}
              className='text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition duration-300'
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
