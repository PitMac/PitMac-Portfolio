import { getPostContent } from "@/services/posts";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html";

export default async function ProjectPage({ params }) {
  const resolvedParams = await params;
  const post = await getPostContent(resolvedParams.slug, "projects");
  if (!post) return notFound();

  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <div className="max-w-3xl mx-auto p-6">
      {post.image && (
        <img src={post.image} alt={post.title} className="rounded-lg mb-4" />
      )}
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-6">{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}
