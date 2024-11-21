
import { FaTruck, FaHeadset, FaGift, FaStar } from 'react-icons/fa'; // Importing icons

const Offers = () => {
  return (
    <div className="relative w-full py-16 bg-white shadow-lg">
      {/* Section Title */}
      <h2 className="text-center text-3xl font-bold text-[#151875] mb-8">
        What Shopex Offers
      </h2>

      {/* Offers Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {/* Card 1: Free Shipping */}
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <div className="text-[#FB2448] text-4xl mb-4">
            <FaTruck /> {/* Shipping Icon */}
          </div>
          <h3 className="text-xl font-semibold text-[#151875] mb-2">Free Shipping</h3>
          <p className="text-sm text-gray-500">
            Get free shipping on all orders above $50.
          </p>
        </div>

        {/* Card 2: 24/7 Support */}
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <div className="text-[#FB2448] text-4xl mb-4">
            <FaHeadset /> {/* Support Icon */}
          </div>
          <h3 className="text-xl font-semibold text-[#151875] mb-2">24/7 Support</h3>
          <p className="text-sm text-gray-500">
            We’re here to help you anytime with our 24/7 support team.
          </p>
        </div>

        {/* Card 3: Special Offers */}
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <div className="text-[#FB2448] text-4xl mb-4">
            <FaGift /> {/* Gift Icon */}
          </div>
          <h3 className="text-xl font-semibold text-[#151875] mb-2">Special Offers</h3>
          <p className="text-sm text-gray-500">
            Unlock special offers and discounts on selected products.
          </p>
        </div>

        {/* Card 4: High-Quality Products */}
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <div className="text-[#FB2448] text-4xl mb-4">
            <FaStar /> {/* Star Icon */}
          </div>
          <h3 className="text-xl font-semibold text-[#151875] mb-2">High-Quality Products</h3>
          <p className="text-sm text-gray-500">
            Shop premium products curated just for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
