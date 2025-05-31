import { useState } from 'react';
import { Highlight } from '@components/Highlight';
import { Container, Content, Icon } from './styles';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Input } from '@components/input/input';
import { useNavigation } from '@react-navigation/native';

export function NewGroup() {
  const [group, setGroup] = useState(''); 
  const navigation = useNavigation();
  
  function handleNew() {
    navigation.navigate('players', { group });
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
          onChangeText={setGroup}
          value={group}
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