import React from "react";

const DesignArticleContent = ({ frontmatter, content }) => {
  return (
    <article className="max-w-screen-md mx-auto py-12 px-4">
      {frontmatter.img && (
        <img
          src={frontmatter.img}
          alt={frontmatter.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
      )}
      <h1 className="text-3xl font-bold mb-4">{frontmatter.title}</h1>
      <p className="text-gray-600 mb-8">{frontmatter.date}</p>
      <div className="prose max-w-none">{content}</div>
    </article>
  );
};

export default DesignArticleContent;
