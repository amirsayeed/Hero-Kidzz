"use client";

import Image from "next/image";
import { useState } from "react";

const categories = [
  "All",
  "Parenting",
  "Learning",
  "Activities",
];

export default function CategoryFilter({ blogs }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <>
      {/* Categories */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`btn rounded-full px-5 ${
              selectedCategory === category
                ? "btn-primary"
                : "btn-ghost border border-base-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <article
              key={blog.id}
              className="card overflow-hidden border border-base-200 bg-base-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <figure className="h-56">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover"
                  height={224}
                  width={250}
                />
              </figure>

              <div className="card-body">
                <div className="flex items-center justify-between gap-3">
                  <span className="badge badge-primary badge-outline">
                    {blog.category}
                  </span>

                  <span className="text-xs text-base-content/50">
                    {blog.date}
                  </span>
                </div>

                <h3 className="card-title mt-2 text-xl leading-snug">
                  {blog.title}
                </h3>

                <p className="line-clamp-3 text-sm leading-6 text-base-content/65">
                  {blog.excerpt}
                </p>

                <div className="card-actions mt-4">
                  <a
                    href={`/blog/${blog.id}`}
                    className="font-semibold text-primary"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="col-span-full py-12 text-center">
            <h3 className="text-xl font-semibold">
              No articles found
            </h3>

            <p className="mt-2 text-base-content/60">
              There are no articles in this category yet.
            </p>
          </div>
        )}
      </div>
    </>
  );
}