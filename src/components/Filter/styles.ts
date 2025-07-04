import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type FilterStyleProps = {
  isActive: boolean;
};

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ theme, isActive }) => css`
    background-color: ${isActive ? theme.COLORS.GRAY_500 : theme.COLORS.GRAY_600};
    border: 1px solid ${isActive ? theme.COLORS.GREEN_700 : 'transparent'};
  `};

  border-radius: 4px;
  margin-right: 12px;
  height: 38px;
  width: 70px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<FilterStyleProps>`
  text-transform: uppercase;

  ${({ theme }) => css`
    font-family: ${theme.FONTS_FAMILY.BOLD};
    font-size: ${theme.FONTS_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `}
`;
