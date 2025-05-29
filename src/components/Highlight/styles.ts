import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.FONTS_SIZE.XL}px;
    font-family: ${theme.FONTS_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.FONTS_SIZE.MD}px;
    font-family: ${theme.FONTS_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_300};
  `}
`;