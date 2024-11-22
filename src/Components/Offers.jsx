import React from 'react';

// Importing images
import DeliveryImage from '../assets/image/delivery.png';
import CashbackImage from '../assets/image/cashback.png';
import PremiumImage from '../assets/image/premium.png';
import ServiceImage from '../assets/image/24.png';

const Offers = () => {
  return (
    <div className="relative w-full py-16 bg-white shadow-lg">
      <h2 className="text-center mb-8 font-josefin text-3xl font-bold text-gray-800" >
        What Shopex Offers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-40">
        
        {/* Card 1 */}
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <div className="mb-4">
            <img src={DeliveryImage} alt="Free Shipping" className="mx-auto w-12 h-16" />
          </div>
          <h3 className="text-xl font-semibold text-[#151875] mb-2" style={{ fontFamily: 'Josefin Sans' }}>
            Free Shipping
          </h3>
          <p className="text-sm text-gray-500">
            Get free shipping on all orders above $50.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <div className="mb-4">
            <img src={CashbackImage} alt="24/7 Support" className="mx-auto w-16 h-16" />
          </div>
          <h3 className="text-xl font-semibold text-[#151875] mb-2" style={{ fontFamily: 'Josefin Sans' }}>
            24/7 Support
          </h3>
          <p className="text-sm text-gray-500">
            We’re here to help you anytime with our 24/7 support team.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <div className="mb-4">
            <img src={PremiumImage} alt="Special Offers" className="mx-auto w-16 h-16" />
          </div>
          <h3 className="text-xl font-semibold text-[#151875] mb-2" style={{ fontFamily: 'Josefin Sans' }}>
            Special Offers
          </h3>
          <p className="text-sm text-gray-500">
            Unlock special offers and discounts on selected products.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-lg p-6 rounded-lg text-center">
          <div className="mb-4">
            <img src={ServiceImage} alt="High-Quality Products" className="mx-auto w-16 h-16" />
          </div>
          <h3 className="text-xl font-semibold text-[#151875] mb-2" style={{ fontFamily: 'Josefin Sans' }}>
            High-Quality Products
          </h3>
          <p className="text-sm text-gray-500">
            Shop premium products curated just for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
