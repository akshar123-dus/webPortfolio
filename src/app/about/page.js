import React from "react";

const about = () => {
  return (
    <section className="text-gray-600 min-h-screen">
      <div className="max-w-screen-xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 md:text-4xl">
          About Me
        </h1>
        <p className="text-xl text-gray-700 mt-4">
          This page contains a short introduction about me.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative w-64 h-64 md:w-90 md:h-100 rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img
            src="/images/Pics/Akshar_Pic.jpeg"
            alt="about"
            className="w-full rounded-lg"
            width={400}
            height={400}
          />
        </div>
        <div className="space-y-4 p-4">
          <p className="text-gray-700 leading-relaxed">
            I am Akshar Tyagi, a software engineer and a writer. I am passionate
            about technology and writing. I love to write about technology,
            programming, and software development. I also write about personal
            development, productivity, and self-improvement.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Through these articles and projects, I wish to inform the world
            about the latest and most impactful accomplishments, accomplishments
            that will shape the future. For example, the article about the new
            Marjona 1 chip. These types of groundbreaking discoveries invoke
            something in me, a sense of pride and I wish to let everyone know
            and be informed about them. I also write articles about real world
            application and case studies about things which I have studied or
            learnt about in school such as the economics articles. I believe it
            is imperative to stay informed and up-to-date about whats happening
            around the world in the modern age and I wish that this webpage will
            do just that.
          </p>
        </div>
      </div>
    </section>
  );
};

export default about;
