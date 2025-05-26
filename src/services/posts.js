import matter from "gray-matter";

export async function getPostsList(type) {
  const res = await fetch(
    `https://api.github.com/repos/PitMac/PitMac-Posts/contents/${type}`
  );

  if (!res.ok) throw new Error(`No se pudo obtener los ${type}`);

  const files = await res.json();

  return files
    .filter((file) => file.name.endsWith(".md"))
    .map((file) => ({
      slug: file.name.replace(".md", ""),
      url: file.download_url,
    }));
}

export async function getPostContent(slug, type) {
  const url = `https://raw.githubusercontent.com/PitMac/PitMac-Posts/main/${type}/${slug}.md`;

  const res = await fetch(url);
  if (!res.ok) return null;

  const raw = await res.text();
  const { data, content } = matter(raw);

  return { ...data, content };
}
