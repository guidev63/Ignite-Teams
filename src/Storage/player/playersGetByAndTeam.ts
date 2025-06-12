import { playerAddByGroup } from './playerAddByGroup';
import { playersGetByGroup } from './playersGetByGroup';


export async function playersGetByGroupAndTeam(group: string, team:string){

    try{
        const Storage = await playersGetByGroup(group);

        const players = Storage.filter(player => player.team === team);

    }catch(error){
        throw error;
    }
}