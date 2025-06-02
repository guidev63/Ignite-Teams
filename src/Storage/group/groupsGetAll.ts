import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../storageConfig";

export async function groupsGetAll(){
    
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION);
}