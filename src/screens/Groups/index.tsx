import { useState } from 'react';
import { FlatList } from 'react-native';
import { Button } from '@components/Button';
import { ListEmpty } from '@components/ListEmpty';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { Loading } from '@components/Loading';
import { Container } from "./styles";
import { useNavigation } from '@react-navigation/native';

export function Groups() {

  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();
  function handleNewGroup() {
    navigation.navigate('newGroup');
  }

  async function fetch{

  }

  return (
    <Container>
      <Header />
      <Highlight
        title="Turmas"
        subtitle="Jogue com a sua turma"
      />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard title={item} />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?"
          />
        )}
        showsHorizontalScrollIndicator={false}
      />

      <Button
        title="Criar Nova Turma"
        onPress={handleNewGroup}
      />
    </Container>
  );
}
