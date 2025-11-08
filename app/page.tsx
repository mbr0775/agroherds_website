import AgroherdsHomepage from './main_screens/HomeHero';
import Navigation from './main_screens/navigationItems';
import AboutSection from './main_screens/AboutSection';
import Products from './main_screens/Products';
import Destinations from './main_screens/Destinations';
import Offers from './main_screens/Offers';
import ContacSection from './main_screens/Contact';
import OurServices from './main_screens/Services';

export default function Home() {
  return (
    <>
      <Navigation />
      <AgroherdsHomepage />
      <div className="-mt-[20px]"><AboutSection /></div>
      <div className="-mt-[20px] translate-y-[-120px]"><Products /></div>
      <div className="-mt-[20px] translate-y-[-200px]"><Destinations /></div>
      <div className="-mt-[20px] translate-y-[-280px]"><Offers /></div>
      <div className="-mt-[20px] translate-y-[-360px]"><OurServices /></div>
      <div className="-mt-[20px] translate-y-[-420px]"><ContacSection /></div>
    </>
  );
}