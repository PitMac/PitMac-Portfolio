import Link from "next/link";
import { getPostContent, getPostsList } from "@/services/posts";

export default async function ProjectsPage() {
  const postsList = await getPostsList("projects");

  const posts = await Promise.all(
    postsList.map(async ({ slug }) => {
      const data = await getPostContent(slug, "projects");
      return { slug, ...data };
    })
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Proyectos</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/projects/${post.slug}`}
            className="group rounded-lg shadow hover:shadow-lg transition overflow-hidden bg-white"
          >
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold group-hover:underline mb-1">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm mb-2">{post.date}</p>
              <p className="text-gray-700 text-sm line-clamp-2">
                {post.content.slice(0, 150)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
