import { useState } from 'react';
import { Highlight } from '@components/Highlight';
import { Container, Content, Icon } from './styles';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Input } from '@components/input/input';
import { useNavigation } from '@react-navigation/native';
import { groupCreate } from 'src/Storage/group/groupCreate';
import { AppError } from '@utils/AppError';
import { Alert } from 'react-native';

export function NewGroup() {


  const [group, setGroup] = useState('');
  const navigation = useNavigation();
  async function handleNew() {

    try {
      
    await groupCreate(group)
    navigation.navigate('players',{ group });

    } catch (error) {
           if(error instanceof AppError){
            Alert.alert('Novo Grupo', error.message);
           }else{
            Alert.alert('Novo Grupo', 'não foi possivel criar um novo Grupo');
           }
      console.log(error);
    }

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
