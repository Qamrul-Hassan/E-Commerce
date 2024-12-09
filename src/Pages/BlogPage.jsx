import React, { useState, useEffect } from "react";
import PageLayout from "../Components/PageLayout";
import { FaCalendarAlt, FaPenNib, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; 
import BlogImage1 from "../assets/Image/Blog-1.png";
import BlogImage2 from "../assets/Image/Blog-2.png";
import BlogImage3 from "../assets/Image/Blog-3.png";
import RecentPostImage1 from "../assets/Image/BlogS-1.png";
import RecentPostImage2 from "../assets/Image/BlogS-2.png";
import RecentPostImage3 from "../assets/Image/BlogS-3.png";
import RecentPostImage4 from "../assets/Image/BlogS-4.png";
import SaleProductImage1 from "../assets/Image/BlogSale-1.png";
import SaleProductImage2 from "../assets/Image/BlogSale-2.png";
import SaleProductImage3 from "../assets/Image/BlogSale-3.png";

const BlogPage = () => {
  const [expandedPost, setExpandedPost] = useState(null);
  const [offerProducts, setOfferProducts] = useState([]);
  const [loadingOfferProducts, setLoadingOfferProducts] = useState(true);

  useEffect(() => {
    const fetchOfferProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setOfferProducts(data.slice(0, 6)); // Limit to 6 products for display
        setLoadingOfferProducts(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoadingOfferProducts(false);
      }
    };
    fetchOfferProducts();
  }, []);

  const togglePost = (postIndex) => {
    setExpandedPost(expandedPost === postIndex ? null : postIndex);
  };

  const blogPosts = [
    {
      image: BlogImage1,
      title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum.",
      fullContent: "Extended content goes here...",
      date: "Aug 09 2020",
    },
    {
      image: BlogImage2,
      title: "Mauris at orci non vulputate diam tincidunt nec.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum.",
      fullContent: "Extended content goes here...",
      date: "Aug 09 2020",
    },
    {
      image: BlogImage3,
      title: "Sit nam congue feugiat nisl, mauris amet nisi.",
      content: "Sit nam congue feugiat nisl, mauris amet nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      fullContent: "Extended content goes here...",
      date: "Aug 09 2020",
    },
  ];

  const categories = [
    { name: "Hobbies", count: 14 },
    { name: "Women", count: 21 },
    { name: "Sports", count: 10 },
    { name: "Tech", count: 5 },
    { name: "Lifestyle", count: 7 },
  ];

  const recentPosts = [
    { image: RecentPostImage1, title: "Post Title One" },
    { image: RecentPostImage2, title: "Post Title Two" },
    { image: RecentPostImage3, title: "Post Title Three" },
    { image: RecentPostImage4, title: "Post Title Four" },
  ];

  const tags = ["Fashion", "Electronics", "Tech", "Sports", "Health", "Music"];

  return (
    <PageLayout pageTitle="Blog Page">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Main Blog Content */}
          <div className="col-span-3">
            {blogPosts.map((post, index) => (
              <div key={index} className="mb-10 border-b pb-6">
                <img
                  src={post.image}
                  alt={`Blog Post ${index + 1}`}
                  className="w-full rounded-lg mb-4"
                />
                <div className="text-sm text-purple-500 flex items-center">
                  <FaPenNib className="mr-2 text-yellow-500" />
                  <span className="text-lg font-semibold text-purple-500 mr-2">Surf Auxion</span>
                  <FaCalendarAlt className="mr-2" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 my-2">{post.title}</h3>
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
          </div>

          {/* Sidebar */}
          <div className="col-span-1 space-y-10">
            {/* Categories */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Categories</h4>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category, index) => (
                  <span
                    key={index}
                    className="text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-md flex justify-between"
                  >
                    {category.name} <span>({category.count})</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Recent Posts</h4>
              {recentPosts.map((post, index) => (
                <div key={index} className="flex items-center mb-4">
                  <img
                    src={post.image}
                    alt={`Recent Post ${index + 1}`}
                    className="w-16 h-16 rounded-lg object-cover mr-4"
                  />
                  <span className="text-sm text-gray-600">{post.title}</span>
                </div>
              ))}
            </div>

            {/* Sale Products Section */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Sale Products</h4>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center mb-4">
                  <img
                    src={SaleProductImage1}
                    alt="Sale Product 1"
                    className="w-16 h-16 rounded-lg object-cover mr-4"
                  />
                  <div>
                    <h5 className="text-gray-800 font-medium">Sale Product 1</h5>
                    <span className="text-sm text-purple-500">$25.00</span>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <img
                    src={SaleProductImage2}
                    alt="Sale Product 2"
                    className="w-16 h-16 rounded-lg object-cover mr-4"
                  />
                  <div>
                    <h5 className="text-gray-800 font-medium">Sale Product 2</h5>
                    <span className="text-sm text-purple-500">$30.00</span>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <img
                    src={SaleProductImage3}
                    alt="Sale Product 3"
                    className="w-16 h-16 rounded-lg object-cover mr-4"
                  />
                  <div>
                    <h5 className="text-gray-800 font-medium">Sale Product 3</h5>
                    <span className="text-sm text-purple-500">$35.00</span>
                  </div>
                </div>
              </div>
            </div>

           {/* Offer Products Section */}
<div>
  <h4 className="font-semibold text-gray-800 mb-4">Offer Products</h4>
  {loadingOfferProducts ? (
    <p>Loading...</p>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {offerProducts.slice(0, 4).map((product, index) => {
        const discountedPrice = product.price * 0.8; // Simulate a 20% discount
        return (
          <div key={index} className="bg-white border shadow-md p-4 rounded-lg relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-28 object-cover mb-4 rounded-md"
            />
            <h5 className="text-gray-800 font-medium text-md mb-2">{product.title}</h5>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-800 font-semibold">${product.price.toFixed(2)}</span>
              <span className="text-sm text-red-500 line-through">${discountedPrice.toFixed(2)}</span>
            </div>
            <div className="mt-2">
              <span className="text-lg text-green-500 font-semibold">
                Discounted Price: ${discountedPrice.toFixed(2)}
              </span>
            </div>
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs py-1 px-2 rounded-full">
              Discount
            </span>
          </div>
        );
      })}
    </div>
  )}
</div>


            {/* Follow Us */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <FaFacebook className="text-blue-600" />
                <FaTwitter className="text-blue-400" />
                <FaInstagram className="text-pink-500" />
              </div>
            </div>

            {/* Tags */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Tags</h4>
              <div className="flex flex-wrap">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-md mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogPage;
