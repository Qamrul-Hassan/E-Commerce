
import FeaturedSection from "../Components/FeaturedSection";
import LatestProduct from "../Components/LatestProduct";
import PromotionSection from "../Components/PromotionSection"; 
import Offers from "../Components/Offers"
import UniqueSection from "../Components/UniqueSection"
import TrendingSection from "../Components/TrendingSection";
import DiscountItem from "../Components/DiscountItem";
import TopCategories from "../Components/TopCategories";
import NewsLetter from "../Components/NewsLetter";
import LatestBlog from "../Components/LatestBlog";

const Home = () => {
  return (
    <div>
      
      <PromotionSection />
      <FeaturedSection/>
      <LatestProduct/>
      <Offers/>
      <UniqueSection/>
      <TrendingSection/>
      <DiscountItem/>
      <TopCategories/>
      <NewsLetter/>
      <LatestBlog/>
    </div>
  );
};

export default Home;
