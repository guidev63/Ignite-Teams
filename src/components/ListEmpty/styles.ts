import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  text-align: center;
  ${({ theme }) => css`
  font-size: ${theme.FONTS_SIZE.SM}px;
  font-family: ${theme.FONTS_FAMILY.REGULAR};
  color: ${theme.COLORS.GRAY_300};
  `}
`;
