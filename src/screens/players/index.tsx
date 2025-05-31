import { Alert, FlatList } from 'react-native';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/input/input';
import { Filter } from '@components/Filter';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { Container, Form, HeaderList, NumberOfPlayers } from './styles';

type RouteParams = {
  group: string;
};

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<string[]>([]);
  const [newPlayerName, setNewPlayerName] = useState('');
  
  const route = useRoute();
  const { group } = route.params as RouteParams;

  function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert('Nova Pessoa', 'Informe o nome da pessoa!');
    }
    
    setPlayers(prev => [...prev, newPlayerName]);
    setNewPlayerName('');
  }

  function handleRemovePlayer(name: string) {
    Alert.alert('Remover', `Deseja remover ${name}?`, [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: () => setPlayers(prev => prev.filter(player => player !== name)) }
    ]);
  }

  return (
    <Container>
      <Header showBackButton />
      
      <Highlight
        title={group}
        subtitle="Adicione a galera e separe os times"
      />

      <Form>
        <Input
          placeholder="Nome da Pessoa"
          autoCorrect={false}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
        />
        <ButtonIcon
          icon="add"
          onPress={handleAddPlayer}
        />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B', 'Time C']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>
          {players.length}
        </NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item }) => (
          <PlayerCard
            name={item}
            onRemove={() => handleRemovePlayer(item)}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 }
        ]}
      />

      <Button
        title="Remover Turma"
        type="SECONDARY"
        onPress={() => Alert.alert('Remover Turma', `Deseja remover a turma ${group}?`)}
      />
    </Container>
  );
}