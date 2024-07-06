import styled, { css } from "styled-components";
import { PopNewCardSubttl } from "./Popup/PopNewCard/popNewCard.styled.js";

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const Hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;
export const Hover03 = css`
  &:hover {
    background-color: #33399b;
    color: #ffffff;
    a {
      color: #ffffff;
    }
  }
`;

export const Hover02 = css`
  &:hover {
    color: #33399b;
    &::after {
      border-left-color: #33399b;
      border-bottom-color: #33399b;
    }
  }
`;

export const SubTtl = css`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const FormInput = css`
  margin-bottom: 20px;
`;

export const ErrorText = styled.p`
  color: red;
  margin-top: 2px;
  margin-bottom: 10px;
`;

export const Grey = css`
  background: #94a6be;
  color: #ffffff;
`;
