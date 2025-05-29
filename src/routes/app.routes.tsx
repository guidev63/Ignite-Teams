import { createNativeStackNavigator}  from '@react-navigation/native-stack';

import { Groups } from '@screens/Groups';
import { NewGroup } from '@screens/NewGroup';
import {  } from '@screen@screens/Players

const {Navigator,Screen} = createNativeStackNavigator();


export function AppRoutes(){
    return(
    <Navigator>
        <Screen 
          name="groups"
          component={Groups}
        />
        <Screen 
          name="NewGroup"
          component={NewGroup}
        />
        <Screen 
          name="players"
          component={players}
        />
    </Navigator>
    );
}




