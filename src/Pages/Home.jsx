
import FeaturedSection from "../Components/FeaturedSection";
import LatestProduct from "../Components/LatestProduct";
import PromotionSection from "../Components/PromotionSection"; 
import Offers from "../Components/Offers"
const Home = () => {
  return (
    <div>
      
      <PromotionSection />
      <FeaturedSection/>
      <LatestProduct/>
      <Offers/>
      
    </div>
  );
};

export default Home;
