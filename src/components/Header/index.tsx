import { Container, Logo, BackIcon, Backbutton } from './styles';
import logoImg from '@assets/logo.png';
type Props = {
  showBackButton?:boolean;
}
export function Header({showBackButton = false }:Props) {
  return ( 
    <Container>
      {
        showBackButton &&
      <Backbutton>
        <BackIcon />
      </Backbutton>
}
      <Logo source={logoImg} />
    </Container>
  );
}
