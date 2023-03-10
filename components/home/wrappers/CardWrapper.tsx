import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 80%;
  background-color: ${(props) => props.theme.color1};
  border: 5px solid ${(props) => props.theme.color2};
  border-radius: 15px;
`;

export default CardWrapper;
