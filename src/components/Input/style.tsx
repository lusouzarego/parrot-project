import styled from "styled-components";

export const InputCostum = styled.input.attrs((props) => ({
  type: "text",
  size: props.placeholder,
}))`
  width: 335px;
  height: 39px;
  margin: 20px auto;
  border-radius: 10px;
  border: 1px solid #919191;
  background: #ffffff;

  @media only screen and (max-width: 400px) {
    max-width: 250px;
  }
`;
