import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '../storageConfig';
import { groupsGetAll } from './groupsGetAll';
import { AppError } from '@utils/AppError';

export async function groupCreate(newGroup: string) {

    try {

        const storadGrops = await groupsGetAll();

        const storage = JSON.stringify([...storadGrops, newGroup])

        const groupAlreadyExists = storadGrops.includes(newGroup);

        if(groupAlreadyExists){

         throw  new AppError('Já Existe um grupo Cadastrado  com esse Nome.');
        }

        await AsyncStorage.setItem(GROUP_COLLECTION, storage);

    }
    catch (error) {
        throw error;
    }
};
