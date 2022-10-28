import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  ailgn-items: center;
  padding: 0 40px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);

  a {
    text-decoration: none;
    color: #6033aa;
    font-size: 16px;
  }

  h3 {
    font-size: 24px;
    color: #76bb4c;
    padding: 0 20px;
    border-width: 0px 2px 0px 0px;
    border-style: solid;
    border-color: #76bb4c;
    margin-right: 10px;
  }

  img {
    width: 245px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
  }

  @media only screen and (max-width: 400px) {
    max-width: 400px;

    img {
      width: 150px;
    }

    h3{
      font-size:21px;
  }
`;
