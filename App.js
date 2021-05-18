import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';


const Stack = createStackNavigator();
const globalScreenOptions = {
  headerStyle: { backgroundColor: "purple" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
  headerTitleAlign: "center"
}


const App = (props) => {

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={globalScreenOptions}>
          <Stack.Screen name="Login" component={WelcomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}
export default App;
