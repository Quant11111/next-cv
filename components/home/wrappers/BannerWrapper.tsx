import styled from "styled-components";

export const BannerWrapper = styled.div`
  width: ${(props) => props.theme.width};
  height: 19%;
  display: flex;
  background-color: ${(props) => props.theme.color1};
  border-bottom: 5px solid ${(props) => props.theme.color2};

  h1 {
    font-size: 3rem;
    color: #fff;
  }
`;

export default BannerWrapper;
