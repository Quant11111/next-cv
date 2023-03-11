import styled from "styled-components";

type ButtonStyleProps = {
  top: string;
  left: string;
};

const ButtonStyle = styled.div<ButtonStyleProps>`
  position: absolute;
  display: flex;

  width: 150px;
  height: 50px;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  display: flex;
  .h1 {
    text-align: center;
    h1 {
      color: #000000;
      font-family: fantasy;
    }
  }
`;

export default ButtonStyle;
