
import TopBar from '../Components/TopBar'
import Navbar from '../Components/Navbar'
import PromotionSection from '../Components/PromotionSection'
import FeaturedSection from '../Components/FeaturedSection'
import LatestProduct from '../Components/LatestProduct'
import Offers from '../Components/Offers';


const RouteLayout = () => {
  return (
    <>
    <TopBar/>
    <Navbar/>
    <PromotionSection/>
    <FeaturedSection/>
    <LatestProduct/>
    <Offers/>
    
    </>
  )
}

export default RouteLayout
