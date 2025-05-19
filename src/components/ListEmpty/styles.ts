import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONTS_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONTS_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;
