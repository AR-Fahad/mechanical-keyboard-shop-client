import FAQs from "../../components/home/FAQs";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import Guide from "../../components/home/Guide";
import HappyClients from "../../components/home/HappyClients";
import Hero from "../../components/home/Hero";
import OurJourney from "../../components/home/OurJourney";
import Services from "../../components/home/Services";
import TopBrands from "../../components/home/TopBrands";

const Home = () => {
  return (
    <div className="space-y-16 mb-10">
      <div>
        <Hero />
      </div>
      <div>
        <OurJourney />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <FeaturedProducts />
      </div>
      <div>
        <TopBrands />
      </div>
      <div>
        <FAQs />
      </div>
      <div>
        <Guide />
      </div>
      <div>
        <HappyClients />
      </div>
    </div>
  );
};

export default Home;
