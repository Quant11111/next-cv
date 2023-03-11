import React from "react";
import ButtonStyle from "./ButtonStyle";

type Props = {
  navlink: string;
  text: string;
  top: string;
  left: string;
};

const InfiniteSquaresButton = (props: Props) => {
  return (
    <ButtonStyle top={props.top} left={props.left}>
      <h1>{props.text}</h1>
    </ButtonStyle>
  );
};

export default InfiniteSquaresButton;
