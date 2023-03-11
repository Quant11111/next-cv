import React from "react";
import Demo from "../buttons/infiniteSquareButton/Demo";
import NavbarWrapper from "./NavbarWrapper";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <NavbarWrapper>
      <Demo>Salut</Demo>
      <h1>Salut tt le monde</h1>
      <div>
        <a href={"/"}>
          <Demo>Salut</Demo>
        </a>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
