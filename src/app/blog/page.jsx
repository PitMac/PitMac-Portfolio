import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <ul>
        {posts.map(({ slug, title, date }) => (
          <li key={slug} className="mb-2">
            <Link
              href={`/blog/${slug}`}
              className="text-blue-600 hover:underline"
            >
              {title} <span className="text-sm text-gray-500">({date})</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
