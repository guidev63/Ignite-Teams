import { Header } from '@components/Header';
import { Container, Form, HeaderList, NumberOfPlayers } from './styles';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/input/input';
import { Filter } from '@components/Filter';
import { Alert, FlatList, TextInput } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useRoute } from '@react-navigation/native';
import { AppError } from '@utils/AppError';
import { playerAddByGroup } from 'src/Storage/player/playerAddByGroup';
import { playersGetByGroupAndTeam } from 'src/Storage/player/playersGetByAndTeam';
import { PlayerStorageDTO } from 'src/Storage/player/PlayerStorageDTO';

type RouteParams = {
  group: string;
};

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState('');
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

   const newPlayerNameInputRef = useRef<TextInput>(null);



  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert('Nova Pessoa', 'Informe o Nome da Pessoa Para Adicionar.');
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer,group);

      newPlayerNameInputRef.current?.blur();

      setNewPlayerName('');
      fetchPlayersByTeam();

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova Pessoa', error.message);
      } else {
        console.log(error);
        Alert.alert('Nova Pessoa', 'Não foi Possível Adicionar.');
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert('Pessoas', 'Não Foi possível Carregar as Pessoas do Time Selecionado.');
    }
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title={group}
        subtitle="Adicione a Galera e Separe os Times"
      />

      <Form>
        <Input
           inputRef={newPlayerNameInputRef}
          onChangeText={setNewPlayerName}
          value={newPlayerName}
          placeholder="Nome Da Pessoa"
          autoCorrect={false}
        />
        <ButtonIcon
          icon="add"
          onPress={handleAddPlayer}
        />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B', 'Time C']}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <Filter
              title={item.name}
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
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemove={() => { }}
          />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não Há Pessoas Nesse Time." />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button
        title="Remover Turma"
        type="SECONDARY"
      />
    </Container>
  );
}
