import { Highlight } from '@components/Highlight';
import { Container, Content, Icon } from './styles';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Input } from '@components/input/input';
import { useNavigation } from '@react-navigation/native';

export function NewGroup() {
  const navigation = useNavigation();
 function handleNew(){
navigation.navigate('players' , { group:'Rocket'});
 }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova Turma"
          subtitle="Crie a turma para Adicionar as Pessoas"
        />

        <Input
          placeholder="Nome da Turma"
        />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNew}
        />
      </Content>
    </Container>
  );
}
