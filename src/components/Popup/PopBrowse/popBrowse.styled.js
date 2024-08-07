import styled, { css } from "styled-components";
import { topicStyles } from "../../../lib/topic.js";
import {
  CategorysTheme,
  FormNewArea,
} from "../PopNewCard/popNewCard.styled.js";
import { Grey, Hover01, Hover03 } from "../../shared.styled.js";

export const CardTopic = styled(CategorysTheme)`
  opacity: 1;
  background-color: ${({ $topicColor }) =>
    topicStyles[$topicColor]?.backgroundColor || "#b4fdd1"};

  color: ${({ $topicColor }) => topicStyles[$topicColor]?.color || "#06b16e"};
`;

export const PopBrowse = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 7;
`;

export const PopBrowsContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopBrowsBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

export const PopBrowsContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopBrowsTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowsTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const PopBrowsStatus = styled.div`
  margin-bottom: 11px;
`;

export const PopTitle = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 14px;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;

  ${Grey};

  ${(props) =>
    props.$active
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0.4;
        `};
`;

export const PopBrowsWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PopBrowsForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormBrowsBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BtnBor = css`
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
  a {
    color: #565eef;
  }
`;

export const BtnBg = css`
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
  a {
    color: #ffffff;
  }
`;

export const PopBrowseBtn = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }
`;

export const PopBrowseEditGroup = styled(PopBrowseBtn)``;

export const PopBrowseBtnEdit = styled.button`
  ${BtnBor}
  ${Hover03}
`;

export const BtnGroup = styled.div`
  button {
    margin-right: 8px;
  }
`;

export const PopBrowseDelete = styled.button`
  ${BtnBor}
  ${Hover03}
`;

export const PopBrowseClose = styled.button`
  ${BtnBg}
  ${Hover01}
`;

export const PopBrowseEdit01 = styled.button`
  ${BtnBg}
  ${Hover01}
`;

export const PopBrowseEdit03 = styled.button`
  ${BtnBor}
  ${Hover03}
`;

export const FormBrowseArea = styled(FormNewArea)`
  background-color: ${({ $readOnly }) => ($readOnly ? "#EAEEF6" : "initial")};
  color: ${({ $readOnly }) => ($readOnly ? "#94A6BE" : "initial")};
`;
