import React, { useState } from "react";
import PageLayout from "../Components/PageLayout";
import { FaCalendarAlt, FaPenNib } from "react-icons/fa"; // Importing calendar and pen nib icons
import BlogImage1 from "../assets/Image/Blog-1.png";
import BlogImage2 from "../assets/Image/Blog-2.png";
import BlogImage3 from "../assets/Image/Blog-3.png";

const BlogPage = () => {
  const [expandedPost, setExpandedPost] = useState(null);

  const togglePost = (postIndex) => {
    setExpandedPost(expandedPost === postIndex ? null : postIndex); // Toggle between showing and hiding content
  };

  const blogPosts = [
    {
      image: BlogImage1,
      title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      fullContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at. Cras malesuada lobortis egestas. Nulla tincidunt, elit et consequat consectetur, nulla quam posuere lectus, euismod hendrerit elit lectus eu metus.",
      date: "Aug 09 2020",
    },
    {
      image: BlogImage2,
      title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      fullContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at. Cras malesuada lobortis egestas. Nulla tincidunt, elit et consequat consectetur, nulla quam posuere lectus, euismod hendrerit elit lectus eu metus.",
      date: "Aug 09 2020",
    },
    {
      image: BlogImage3,
      title: "Sit nam congue feugiat nisl, mauris amet nisi.",
      content:
        "Sit nam congue feugiat nisl, mauris amet nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      fullContent:
        "Sit nam congue feugiat nisl, mauris amet nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at. Cras malesuada lobortis egestas. Nulla tincidunt, elit et consequat consectetur, nulla quam posuere lectus, euismod hendrerit elit lectus eu metus.",
      date: "Aug 09 2020",
    },
  ];

  return (
    <PageLayout pageTitle="Blog Page">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Main Blog Section */}
          <div className="col-span-3">
            {blogPosts.map((post, index) => (
              <div key={index} className="mb-10 border-b pb-6">
                <img
                  src={post.image}
                  alt={`Blog Post ${index + 1}`}
                  className="w-full rounded-lg mb-4"
                />
                <div className="text-sm text-purple-500 flex items-center">
                  {/* Add the Surf Auxion icon for every post */}
                  <FaPenNib className="mr-2 text-yellow-500" /> {/* Surf Auxion Icon */}
                  <span className="text-lg font-semibold text-purple-500 mr-2">Surf Auxion</span>
                  <FaCalendarAlt className="mr-2" /> {/* Calendar icon */}
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 my-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-2">
                  {expandedPost === index ? post.fullContent : post.content}
                </p>
                <button
                  className="text-purple-500 font-medium"
                  onClick={() => togglePost(index)}
                >
                  {expandedPost === index ? "Read Less" : "Read More"}
                </button>
              </div>
            ))}
            {/* Pagination */}
            <div className="flex justify-center space-x-2 mt-6">
              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  className="px-3 py-1 border rounded text-purple-500 hover:bg-purple-100"
                >
                  {page}
                </button>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-1">
            {/* Search */}
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 mb-6 border rounded-lg"
            />

            {/* Categories */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">Categories</h4>
              <ul className="text-sm space-y-2">
                {["Hobbies (14)", "Women (21)", "Travel (10)", "Food (15)"].map((category, index) => (
                  <li key={index} className="text-gray-600">
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">Recent Posts</h4>
              <ul className="text-sm space-y-2">
                {["Post One", "Post Two", "Post Three", "Post Four"].map((post, index) => (
                  <li key={index} className="text-gray-600">
                    <span>{post}</span> <br /> <span className="text-xs">Aug 09 2020</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sale Products */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">Sale Products</h4>
              <div>No sale products available</div>
            </div>

            {/* Offer Products */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">Offer Products</h4>
              <div>No offer products available</div>
            </div>

            {/* Follow */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">Follow</h4>
              <div className="flex space-x-4 text-purple-500">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogPage;
