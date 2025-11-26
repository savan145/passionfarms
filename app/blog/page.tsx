import React from "react";
import Link from "next/link";

export default function BlogListPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Blog</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Blog Posts */}
        <div className="lg:col-span-2">
          <div className="space-y-8">
            {/* Sample Blog Post Card */}
            <article className="bg-white rounded-lg shadow overflow-hidden">
              <div className="aspect-video bg-gray-100">
                {/* Featured image */}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <span>January 1, 2024</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
                <h2 className="text-2xl font-bold mb-3">
                  <Link
                    href="/blog/sample-post"
                    className="hover:text-blue-600"
                  >
                    How to Choose the Perfect Product
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link
                  href="/blog/sample-post"
                  className="text-blue-600 hover:underline font-medium"
                >
                  Read More →
                </Link>
              </div>
            </article>

            {/* More blog posts would be mapped here */}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center gap-2">
            <button className="px-4 py-2 border rounded hover:bg-gray-50">
              Previous
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              1
            </button>
            <button className="px-4 py-2 border rounded hover:bg-gray-50">
              2
            </button>
            <button className="px-4 py-2 border rounded hover:bg-gray-50">
              3
            </button>
            <button className="px-4 py-2 border rounded hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="space-y-6">
            {/* Search */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-4">Search</h3>
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full border rounded px-4 py-2"
              />
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/blog/category/tips"
                    className="text-blue-600 hover:underline"
                  >
                    Tips & Guides
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/category/news"
                    className="text-blue-600 hover:underline"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/category/reviews"
                    className="text-blue-600 hover:underline"
                  >
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/category/lifestyle"
                    className="text-blue-600 hover:underline"
                  >
                    Lifestyle
                  </Link>
                </li>
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold mb-4">Recent Posts</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/blog/post-1"
                    className="text-sm hover:text-blue-600"
                  >
                    Sample Blog Post Title
                  </Link>
                  <p className="text-xs text-gray-500 mt-1">Jan 1, 2024</p>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
