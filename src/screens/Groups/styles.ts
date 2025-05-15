import { ThemeType } from 'src/@types/style';
import styled from 'styled-components/native';

export const Container = styled.View<{ theme: ThemeType }>`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
 padding: 24px;
`;