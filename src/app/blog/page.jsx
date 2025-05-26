import { getPostContent, getPostsList } from "@/services/posts";
import Link from "next/link";

export default async function BlogPage() {
  const postsList = await getPostsList("posts");

  const posts = await Promise.all(
    postsList.map(async ({ slug }) => {
      const data = await getPostContent(slug, "posts");
      return { slug, ...data };
    })
  );

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <ul className="space-y-6 divide-y divide-gray-200">
        {posts.map((post) => (
          <li key={post.slug} className="pb-3">
            <Link href={`/blog/${post.slug}`} className="block group">
              <h2 className="text-xl font-semibold group-hover:underline">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm mb-1">{post.date}</p>
              <p className="text-gray-700 text-sm line-clamp-2">
                {post.content.slice(0, 150)}...
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
