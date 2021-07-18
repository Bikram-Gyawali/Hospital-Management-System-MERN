import Advantages from "components/HomeComponents/Advantages";
import HeroSection from "components/HomeComponents/HeroSection";
import Navbar from "components/GlobalComponents/Navbar";
import Footer from "components/GlobalComponents/Footer";
import SolutionSteps from "components/HomeComponents/SolutionSteps";
import Specialities from "components/HomeComponents/Specialities";
import CovidChart from "components/HomeComponents/CovidChart";
import styled from "styled-components";
import { useEffect } from "react";
const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HomeScreen = () => {
  window.OneSignal = window.OneSignal || [];
  const OneSignal = window.OneSignal;
  return (
    <HomeContainer>
      <Navbar />
      <HeroSection />
      <CovidChart />
      <SolutionSteps />
      <Advantages />
      <Specialities />
      <Footer />
    </HomeContainer>
  );
};

export default HomeScreen;
