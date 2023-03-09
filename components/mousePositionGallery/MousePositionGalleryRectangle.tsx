import styled from "styled-components";

const MousePositionGalleryRectangle = styled.div`
  border-radius: 1vmax;
  position: absolute;
  transition: transform 800ms ease;
  /////
  background-color: ${(props) => props.color};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  z-index: 0;
  border: black solid 0.2vmax;
  overflow: hidden;

  ////////
  &:hover {
    transform: scale(1.1);
    background-color: none;
  }
  .image {
    height: 100%;
    width: 100%;
    opacity: 0;
    object-fit: cover;
    transition: opacity 800ms ease, transform 800ms ease;
    border-radius: inherit;
  }

  &:hover > .image {
    opacity: 1;
    transform: scale(1.1);
  }
  h1 {
    position: relative;
    text-align: center;
    color: rgb(10, 10, 10);
    top: 34%;
    transition: opacity 800ms ease;
  }
  &:hover > h1 {
    opacity: 0;
  }
`;

export default MousePositionGalleryRectangle;
