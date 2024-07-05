import React from 'react';

const Blog = () => {
  return (
    <section id="blog" className="blog bg-gray-100 py-12">
  <div className="container mx-auto px-4 lg:px-16">
    <h4 className="section-subtitle text-orange-600 text-sm font-bold mb-2 capitalize text-center">Blog</h4>
    <h2 className="section-title text-black text-4xl mb-8 text-center">Latest Updates, Solutions And Company News</h2>
   
    <div className="blog-posts grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="blog-post">
        <div className="blog-image overflow-hidden rounded-t-lg shadow-md transition-transform hover:scale-105">
          <img src="assets/images/blog2.png" alt="BlogImage1" className="w-full" />
        </div>
        <div className="blog-content bg-white rounded-b-lg shadow-md p-4 text-center">
          <h3 className="text-sm text-gray-600 mb-2">20 August 2020 • 1 min read</h3>
          <h4 className="text-lg font-semibold mb-2"><a href="n">Four ways to cheer yourself up on Blue Monday!</a></h4>
          <p className="text-base text-gray-700 mb-2">On the second edition of Serious Business, Inc. editor Jim Ledbetter and Fusion senior editor Salmon debate...</p><br />
          <a href="/" className="text-black-600 font-semibold hover:underline text-left block mt-2">Read More</a>
        </div>
      </div>

      <div className="blog-post">
        <div className="blog-image overflow-hidden rounded-t-lg shadow-md transition-transform hover:scale-105">
          <img src="assets/images/blog1.png" alt="BlogImage2" className="w-full" />
        </div>
        <div className="blog-content bg-white rounded-b-lg shadow-md p-4 text-center">
          <h3 className="text-sm text-gray-600 mb-2">1 October 2020 • 3 min read</h3>
          <h4 className="text-lg font-semibold mb-2"><a href="n">How to Organize Your budget for Maximum Productivity?</a></h4>
          <p className="text-base text-gray-700 mb-2">Global provider connected products for consumers, and enterprises worldwide, supply chain control is everything...</p><br />
          <a href="/" className="text-black-600 font-semibold hover:underline text-left block mt-2">Read More</a>
        </div>
      </div>

      <div className="blog-post">
        <div className="blog-image overflow-hidden rounded-t-lg shadow-md transition-transform hover:scale-105">
          <img src="assets/images/beauty-spa-wide-scaled-720x450.jpg" alt="BlogImage3" className="w-full" />
        </div>
        <div className="blog-content bg-white rounded-b-lg shadow-md p-4 text-center">
          <h3 className="text-sm text-gray-600 mb-2">10 December 2020 • 4 min read</h3>
          <h4 className="text-lg font-semibold mb-2"><a href="n">Should Small Businesses Be Entitled to system?</a></h4>
          <p className="text-base text-gray-700 mb-2">Our team provides skilled & experienced managers who know the intricacies of this vertical and focus...</p><br />
          <a href="/" className="text-black-600 font-semibold hover:underline text-left block mt-2">Read More</a>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Blog;
