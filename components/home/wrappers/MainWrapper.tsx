import styled from "styled-components";

export const CardWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  background-color: ${(props) => props.theme.color3};
`;

export default CardWrapper;
