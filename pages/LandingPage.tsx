import React from "react";
import InfiniteSquares from "../components/InfiniteSquaresLandingPage/InfiniteSquares";
import BodyWrapper from "../components/wrappers/BodyWrapper";
import Navbar from "../components/InfiniteSquaresLandingPage/Navbar";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <InfiniteSquares>
      <BodyWrapper>
        <InfiniteSquares>
          <Navbar />
        </InfiniteSquares>
      </BodyWrapper>
    </InfiniteSquares>
  );
};

export default LandingPage;
