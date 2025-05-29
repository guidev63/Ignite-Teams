import { useNavigation } from '@react-navigation/native';
import { Container, Logo, BackIcon, Backbutton } from './styles';
import logoImg from '@assets/logo.png';


type Props = {
  showBackButton?:boolean;
}
export function Header({showBackButton = false }:Props) {
const navigation = useNavigation();
  function  handleGoBack(){
    navigation.navigate('groups');
  }
  return ( 
    <Container>
      {
        showBackButton &&
      <Backbutton onPress={handleGoBack}>
        <BackIcon />
      </Backbutton>
}
      <Logo source={logoImg} />
    </Container>
  );
}
