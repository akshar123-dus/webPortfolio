import { notFound } from "next/navigation";
import { getAllArticles, getArticleBySlug } from "@/data/articles";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  const articles = getAllArticles();

  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const { frontmatter, content } = article;

  // Estimate reading time (rough calculation: 200 words per minute)
  const readingTime = Math.max(1, Math.ceil(content.split(/\s+/).length / 200));

  // Custom components for ReactMarkdown
  const customComponents = {
    // Headings
    h1: ({ node, ...props }) => (
      <h1
        className="text-4xl font-extrabold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent mb-8 mt-10"
        {...props}
      />
    ),
    h2: ({ node, ...props }) => (
      <h2
        className="text-3xl font-bold text-gray-800 mb-6 mt-10 border-b border-gray-200 pb-2"
        {...props}
      />
    ),
    h3: ({ node, ...props }) => (
      <h3
        className="text-2xl font-semibold text-gray-800 mb-4 mt-8"
        {...props}
      />
    ),
    h4: ({ node, ...props }) => (
      <h4 className="text-xl font-medium text-gray-800 mb-3 mt-6" {...props} />
    ),
    // Paragraphs
    p: ({ node, ...props }) => (
      <p className="text-lg leading-relaxed mb-6 text-gray-700" {...props} />
    ),
    // Lists
    ul: ({ node, ...props }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700" {...props} />
    ),
    ol: ({ node, ...props }) => (
      <ol
        className="list-decimal pl-6 mb-6 space-y-2 text-gray-700"
        {...props}
      />
    ),
    li: ({ node, ...props }) => <li className="text-lg mb-2" {...props} />,

    // Emphasis
    strong: ({ node, ...props }) => (
      <strong className="font-bold text-gray-900" {...props} />
    ),
    em: ({ node, ...props }) => (
      <em className="italic text-gray-800" {...props} />
    ),

    // Links
    a: ({ node, ...props }) => (
      <a
        className="text-indigo-600 font-medium hover:text-indigo-800 underline decoration-2 decoration-indigo-300 underline-offset-2 transition-colors duration-200"
        {...props}
      />
    ),

    // Blockquotes
    blockquote: ({ node, ...props }) => (
      <blockquote
        className="border-l-4 border-indigo-500 pl-6 py-4 my-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-r-lg italic text-gray-700"
        {...props}
      />
    ),
    // Code
    code: ({ node, inline, ...props }) =>
      inline ? (
        <code
          className="bg-gray-100 text-indigo-700 px-1.5 py-0.5 rounded font-mono text-sm"
          {...props}
        />
      ) : (
        <code
          className="block bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto my-6"
          {...props}
        />
      ),
    pre: ({ node, ...props }) => (
      <pre
        className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-8 shadow-lg"
        {...props}
      />
    ),
    // Horizontal rule
    hr: ({ node, ...props }) => (
      <hr className="my-10 border-t-2 border-gray-200" {...props} />
    ),
    // Images
    img: ({ node, ...props }) => (
      <div className="my-8 transition-all duration-300 hover:scale-[1.02]">
        <Image
          className="rounded-xl shadow-xl w-full h-auto object-cover"
          {...props}
          alt={props.alt || "Image"}
          width={1200}
          height={675}
          quality={90}
        />
        {props.alt && props.alt !== "Image" && (
          <p className="text-sm text-center text-gray-500 mt-2 italic">
            {props.alt}
          </p>
        )}
      </div>
    ),
    // Tables
    table: ({ node, ...props }) => (
      <div className="overflow-x-auto my-8 rounded-lg shadow-md">
        <table className="min-w-full bg-white rounded-lg" {...props} />
      </div>
    ),
    thead: ({ node, ...props }) => (
      <thead className="bg-indigo-600 text-white" {...props} />
    ),
    th: ({ node, ...props }) => (
      <th className="py-3 px-4 text-left font-semibold" {...props} />
    ),
    tbody: ({ node, ...props }) => (
      <tbody className="divide-y divide-gray-200" {...props} />
    ),
    tr: ({ node, ...props }) => (
      <tr
        className="hover:bg-indigo-50 transition-colors duration-150"
        {...props}
      />
    ),
    td: ({ node, ...props }) => <td className="py-3 px-4" {...props} />,
  };
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/articles"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors mb-8 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to articles
        </Link>

        <article>
          {frontmatter.img && (
            <div className="mb-8 overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl">
              <Image
                src={frontmatter.img || "/placeholder.svg"}
                alt={frontmatter.title}
                width={1200}
                height={675}
                className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}

          <div className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 leading-tight">
              {frontmatter.title}
            </h1>

            <div className="flex flex-wrap items-center text-gray-500 gap-4 mb-8">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <time dateTime={frontmatter.date}>{frontmatter.date}</time>
              </div>

              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{readingTime} min read</span>
              </div>

              {frontmatter.tags && (
                <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                  {frontmatter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 prose prose-lg prose-indigo max-w-none">
            <ReactMarkdown components={customComponents}>
              {content}
            </ReactMarkdown>
          </div>

          {frontmatter.author && (
            <div className="mt-12 flex items-center p-6 bg-indigo-50 rounded-xl">
              <div className="flex-shrink-0 mr-4">
                <div className="h-12 w-12 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-600 font-bold text-xl">
                  {frontmatter.author.charAt(0)}
                </div>
              </div>
              <div>
                <p className="font-medium text-gray-900">
                  Written by {frontmatter.author}
                </p>
                {frontmatter.authorBio && (
                  <p className="text-gray-600 text-sm mt-1">
                    {frontmatter.authorBio}
                  </p>
                )}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
