import { useState } from 'react';
import { Alert } from 'react-native'; // Adicionei esta importação
import { Highlight } from '@components/Highlight';
import { Container, Content, Icon } from './styles';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Input } from '@components/input/input';
import { useNavigation } from '@react-navigation/native';

export function NewGroup() {
  const [group, setGroup] = useState(''); 
  const navigation = useNavigation();

  function handleNew(){
    if(!group.trim()) {
      Alert.alert('Turma vazia', 'Informe o nome da turma!');
      return;
    }
    navigation.navigate('players', { group: group.trim() }); // Garantindo que não envie espaços extras
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
          placeholder="Nome da Turma (ex: Turma Rocketseat)"
          onChangeText={setGroup}
          value={group}
          onSubmitEditing={handleNew} // Permite enviar com Enter
        />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNew}
          disabled={!group.trim()} // Desabilita se estiver vazio
        />
      </Content>
    </Container>
  );
}