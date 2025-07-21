import CampaignCarousel from "@/components/carousel";
import KindnessCards from "@/components/home/act-of-kindness";
import FundraisingStats from "@/components/home/trust-and-safety";

const Home = () => {
  return (
    <div>
      <CampaignCarousel />
      <FundraisingStats />
      <KindnessCards />
    </div>
  );
}

export default Home;