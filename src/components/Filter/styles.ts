import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type FilterSyleProps = {
  isActive: boolean;
};

export const Container = styled(TouchableOpacity)<FilterSyleProps>`
  ${({ theme, isActive }) =>
    isActive &&
    css`
      background-color: ${theme.COLORS.white};
      border: 1px solid ${theme.COLORS.GREEN_700};
    `}
  border-radius: 4px;
  margin-right: 12px;
  height: 38px;
  width: 70px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
text-transform: uppercase;
  ${({ theme }) => css`
    font-family: ${theme.FONTS_FAMILY.BOLD};
    font-size: ${theme.FONTS_SIZE.SM}px;
    color: ${theme.COLORS.white};
  `}
`;
