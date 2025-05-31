import { useState } from 'react';
import { Alert, FlatList } from 'react-native';
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

  // Adiciona novo jogador
  function handleAddPlayer() {
    if (!newPlayerName.trim()) {
      return Alert.alert('Novo Jogador', 'Informe o nome do jogador!');
    }

    setPlayers(prev => [...prev, newPlayerName]);
    setNewPlayerName('');
  }

  // Remove jogador
  function handleRemovePlayer(name: string) {
    Alert.alert('Remover', `Deseja remover ${name}?`, [
      { text: 'Cancelar', style: 'cancel' },
      { 
        text: 'Remover', 
        onPress: () => setPlayers(prev => prev.filter(player => player !== name))
      }
    ]);
  }

  return (
    <Container>
      <Header showBackButton />

      {/* Título exibindo o nome da turma recebido */}
      <Highlight
        title={group}
        subtitle="Adicione a galera e separe os times"
      />

      {/* Formulário para adicionar jogadores */}
      <Form>
        <Input
          placeholder="Nome do jogador"
          autoCorrect={false}
          value={newPlayerName}
          onChangeText={setNewPlayerName}
          onSubmitEditing={handleAddPlayer}
        />
        <ButtonIcon
          icon="add"
          onPress={handleAddPlayer}
        />
      </Form>

      {/* Lista de times */}
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

      {/* Lista de jogadores */}
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
          <ListEmpty message="Não há jogadores nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 }
        ]}
      />

      {/* Botão para remover turma */}
      <Button
        title="Remover Turma"
        type="SECONDARY"
        onPress={() => Alert.alert(
          'Remover Turma', 
          `Deseja remover a turma ${group}?`, 
          [
            { text: 'Cancelar', style: 'cancel' },
            { text: 'Remover', style: 'destructive' }
          ]
        )}
      />
    </Container>
  );
}