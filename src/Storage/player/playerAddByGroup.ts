import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/AppError';
import { PLAYER_COLLECTION } from '../../Storage/storageConfig';
import { PlayerStorageDTO } from '../player/PlayerStorageDTO';
import { playersGetByGroup } from './playersGetByGroup'

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
    try {
        const storedPlayers = await playersGetByGroup(group)

        const playerAlreadyExists = storedPlayers.filter(player => player.name === newPlayer.name)

        if (playerAlreadyExists.length > 0) {
            throw new AppError('Essa Pessoa  Já Está Adicioanda em  um Time aqui')
        }

        const storage = JSON.stringify([...storedPlayers, newPlayer]);


        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);

    } catch (error) {
        throw (error);
    }
}