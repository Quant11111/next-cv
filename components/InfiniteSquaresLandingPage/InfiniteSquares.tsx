import styled from "styled-components";

const InfiniteSquares = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  @import url(https://fonts.googleapis.com/css?family=Exo:100);

  /* Animations */
  @-webkit-keyframes bg-scrolling-reverse {
    100% {
      background-position: 50px 50px;
    }
  }
  @-moz-keyframes bg-scrolling-reverse {
    100% {
      background-position: 50px 50px;
    }
  }
  @-o-keyframes bg-scrolling-reverse {
    100% {
      background-position: 50px 50px;
    }
  }
  @keyframes bg-scrolling-reverse {
    100% {
      background-position: 50px 50px;
    }
  }

  @-webkit-keyframes bg-scrolling {
    0% {
      background-position: 50px 50px;
    }
  }
  @-moz-keyframes bg-scrolling {
    0% {
      background-position: 50px 50px;
    }
  }
  @-o-keyframes bg-scrolling {
    0% {
      background-position: 50px 50px;
    }
  }
  @keyframes bg-scrolling {
    0% {
      background-position: 50px 50px;
    }
  }

  color: #999;
  font: 400 16px/1.5 exo, ubuntu, "segoe ui", helvetica, arial, sans-serif;
  text-align: center;
  /* img size is 50x50 */
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC")
    repeat 0 0;

  -webkit-animation: bg-scrolling-reverse 0.92s infinite; /* Safari 4+ */
  -moz-animation: bg-scrolling-reverse 0.92s infinite; /* Fx 5+ */
  -o-animation: bg-scrolling-reverse 0.92s infinite; /* Opera 12+ */
  animation: bg-scrolling-reverse 0.92s infinite; /* IE 10+ */
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  -o-animation-timing-function: linear;
  animation-timing-function: linear;

  &::before {
    font-size: 8rem;
    font-weight: 100;
  }
`;

export default InfiniteSquares;
