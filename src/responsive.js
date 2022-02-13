import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 460px) {
      ${props}
    }
  `;
};

export const mobile1 = (props) => {
  return css`
    @media only screen and (max-width: 650px) {
      ${props}
    }
  `;
};