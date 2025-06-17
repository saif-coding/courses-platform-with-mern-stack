import React from "react";
import HeroSection from "../components/HeroSection";
import Categories from "../components/Categories";
import GetStarted from "../components/GetStarted";
import LiveClasses from "../components/LiveClasses";
import Teachers from "../components/Teachers";
import Testimonials from "../components/Testimonials";
import BlogSection from "../components/BlogSection";
import AppDownload from "../components/AppDownload";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <HeroSection />
      <Categories />
      <GetStarted />
      <LiveClasses />
      <Teachers />
      <Testimonials />
      <BlogSection />
      <AppDownload />
      <Footer />
    </div>
  );
}

export default Home;
