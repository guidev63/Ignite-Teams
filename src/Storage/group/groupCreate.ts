import AsyncStorage from '@react-native-async-storage/async-storage';
import { GROUP_COLLECTION } from '../storageConfig';
import { groupsGetAll } from './groupsGetAll';

export async function groupCreate(newGroupName: string) {
    try {
        const storadGrops = await groupsGetAll();
        const storage =JSON.stringify([...storadGrops,newGroupName])
        await AsyncStorage.setItem(GROUP_COLLECTION,storage );
    } catch (error) {
        throw error;
    }
};
