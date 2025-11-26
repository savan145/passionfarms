import React from "react";
import Link from "next/link";

export default function BlogDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="text-blue-600 hover:underline mb-6 inline-block"
        >
          ← Back to Blog
        </Link>

        <article className="bg-white rounded-lg shadow overflow-hidden">
          {/* Featured Image */}
          <div className="aspect-video bg-gray-100">
            {/* Blog post featured image */}
          </div>

          {/* Article Content */}
          <div className="p-8">
            {/* Meta Information */}
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
              <span>January 1, 2024</span>
              <span>•</span>
              <span>By Admin</span>
              <span>•</span>
              <span>5 min read</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold mb-6">
              How to Choose the Perfect Product
            </h1>

            {/* Tags */}
            <div className="flex gap-2 mb-8">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                Tips
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                Shopping
              </span>
            </div>

            {/* Content */}
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Section Title</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">Another Section</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>

            {/* Share Buttons */}
            <div className="mt-8 pt-8 border-t">
              <p className="text-sm font-semibold mb-3">Share this article:</p>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                  Facebook
                </button>
                <button className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 text-sm">
                  Twitter
                </button>
                <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 text-sm">
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Related post cards would be mapped here */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="aspect-video bg-gray-100"></div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Related Post Title</h3>
                <Link
                  href="/blog/related-post"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
