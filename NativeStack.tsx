import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TestScreen} from './TestScreen';
import {Create} from './Create';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TestScreen} />
      <Stack.Screen name="Create" component={Create} />
    </Stack.Navigator>
  );
};
