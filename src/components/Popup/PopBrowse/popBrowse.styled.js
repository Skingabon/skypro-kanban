import styled from "styled-components";
import { topicStyles } from "../../../lib/topic.js";
import { CategorysTheme } from "../PopNewCard/popNewCard.styled.js";

export const CardTopic = styled(CategorysTheme)`
  opacity: 1;
  background-color: ${({ $topicColor }) =>
    topicStyles[$topicColor]?.backgroundColor || "#b4fdd1"};

  color: ${({ $topicColor }) => topicStyles[$topicColor]?.color || "#06b16e"};
`;
