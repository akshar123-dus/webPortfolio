import React from "react";

const contact = () => {
  return (
    <section className="flex justify-center items-center min-h-screen ">
      <form className="max-w-screen-xl mx-auto text-center">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-5xl font-bold text-gray-800 md:text-4xl">
            Contact Me
          </h1>
          <p className="text-xl text-gray-700 mt-4">
            This page contains a contact form.
          </p>
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
            <div className="flex justify-center">
              <img
                src="https://via.placeholder.com/400"
                alt="contact"
                className="w-full rounded-lg"
              />
            </div>
            <div className="space-y-4 p-4">
              <input
                type="text"
                placeholder="Name"
                className="p-2 w-full border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-2 w-full border border-gray-300 rounded-lg"
              />
              <textarea
                placeholder="Message"
                className="p-2 w-full border border-gray-300 rounded-lg"
              />
              <button className="bg-blue-500 text-white p-2 rounded-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default contact;
