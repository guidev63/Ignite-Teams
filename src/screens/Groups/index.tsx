import { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { Button } from '@components/Button';
import { ListEmpty } from '@components/ListEmpty';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { Loading } from '@components/Loading';
import { Container } from "./styles";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { groupsGetAll } from 'src/Storage/group/groupsGetAll';
import { Filter } from '@components/Filter';

export function Groups() {

  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('newGroup');
  }

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      const uniqueData = Array.from(new Set(data));
      setGroups(uniqueData);
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group });
  }

  useFocusEffect(
    useCallback(() => {
      console.log("Use Effect Executou");
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight
        title="Turmas"
        subtitle="Jogue Com A Sua Turma"
      />

      <FlatList
        data={groups}
        keyExtractor={(item, index) => `${item}-${index}`} // garante chave única
        renderItem={({ item }) => (
          <GroupCard 
            title={item} 
            onPress={() => handleOpenGroup(item)} 
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que Tal Cadastrar A Primeira Turma?" />
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
