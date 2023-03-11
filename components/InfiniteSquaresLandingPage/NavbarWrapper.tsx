import styled from "styled-components";

const NavbarWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100px;
  background-color: #000000;
  justify-content: space-between;
  padding: 10px 0px;
  h1 {
    font-family: fantasy;
    font-size: 2em;
    color: #ffffff;
  }
  .container {
    display: flex;
  }
`;

export default NavbarWrapper;
