'use client'
import CampaignCarousel from "@/components/carousel";
import KindnessCards from "@/components/home/act-of-kindness";
import Givers from "@/components/home/givers";
import TrendingCampaigns from "@/components/home/trending-campaign";
import FundraisingStats from "@/components/home/trust-and-safety";

const Home = () => {

  return (
    <div>
      <CampaignCarousel />
      <FundraisingStats />
      <KindnessCards />
      <TrendingCampaigns />
      <Givers />
    </div>
  );
}

export default Home;