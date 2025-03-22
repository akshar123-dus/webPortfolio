// app/articles/page.js
import Link from "next/link";
import { getAllArticles } from "../../data/articles.js";

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <section className="max-w-screen-lg mx-auto py-12 px-4 min-h-screen">
      <h1 className="text-5xl font-bold mb-6 flex justify-center">
        Words Shape the World:
      </h1>
      <h1 className="text-5xl font-bold mb-6 flex justify-center">
        The Power to Inspire, Influence, and Impact.
      </h1>
      <h2 className="text-4xl font-bold mb-6 flex justify-center">
        My Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(({ slug, frontmatter }) => (
          <div
            key={slug}
            className="bg-white shadow rounded p-4 hover:shadow-lg transition-shadow"
          >
            {frontmatter.img && (
              <img
                src={frontmatter.img}
                alt={frontmatter.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}

            <h2 className="text-xl font-semibold mb-2">{frontmatter.title}</h2>

            <p className="text-gray-600 mb-4">{frontmatter.date}</p>
            <Link
              href={`/articles/${slug}`}
              className="text-blue-600 hover:text-blue-800"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
