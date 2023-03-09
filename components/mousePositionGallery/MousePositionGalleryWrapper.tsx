import styled from "styled-components";

const MousePositionGalleryWrapper = styled.div`
  height: 106vmax;
  width: 120vmax;
  position: absolute;

  ///////////////Background animation////////////////////////////
  margin: auto;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  overflow: hidden;
  background: linear-gradient(315deg, #0e3e6e 38%, #04887f 68%, #0f0f0f 98%);
  animation: gradient 15s ease infinite;
  background-size: 400% 400%;
  background-attachment: fixed;

  @keyframes gradient {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }

  .wave {
    background: rgb(255 255 255 / 25%);
    border-radius: 1000% 1000% 0 0;
    position: fixed;
    width: 200%;
    height: 50em;
    animation: wave 10s -3s linear infinite;
    transform: translate3d(0, 0, 0);
    opacity: 0.8;
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  .wave:nth-of-type(2) {
    bottom: -1.25em;
    animation: wave 18s linear reverse infinite;
    opacity: 0.8;
  }

  .wave:nth-of-type(3) {
    bottom: -2.5em;
    animation: wave 20s -1s reverse infinite;
    opacity: 0.9;
  }

  @keyframes wave {
    2% {
      transform: translateX(1);
    }

    25% {
      transform: translateX(
        -25%
      ); ///add 3 div classname = "wave" in the wrapper to make it work
    } ///example in souseTrack.js where the wrapper is used

    50% {
      transform: translateX(-50%);
    }

    75% {
      transform: translateX(-25%);
    }

    100% {
      transform: translateX(1);
    }
  }
  //////////////////////////////////////////////////////////////////////////////////////////
`;

export default MousePositionGalleryWrapper;
