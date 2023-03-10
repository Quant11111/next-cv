import styled from "styled-components";

import BannerWrapper from "../components/home/wrappers/BannerWrapper";
import CardWrapper from "../components/home/wrappers/CardWrapper";
import MainWrapper from "../components/home/wrappers/MainWrapper";
import Banner from "../components/home/components/Banner";
import BodyWrapper from "../components/wrappers/BodyWrapper";
import Complementaire1 from "../themeProviders/Complementaires1";
import { compileFunction } from "vm";

const Home = () => {
  return (
    <BodyWrapper>
      <MainWrapper theme={Complementaire1}>
        <BannerWrapper theme={Complementaire1}>
          <Banner />
        </BannerWrapper>
        <CardWrapper theme={Complementaire1}>coucou</CardWrapper>
      </MainWrapper>
    </BodyWrapper>
  );
};

export default Home;
