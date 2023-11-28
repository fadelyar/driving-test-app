/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';
import { NativeBaseProvider } from "native-base";
import QuizScreen from "./src/screen/QuizScreen";
import ResultScreen from "./src/screen/ResultScreen";
import HomePage from "./src/screen/HomePage";

const Stack = createStackNavigator();

function App() {

  return (

    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Quiz" component={QuizScreen} />
          <Stack.Screen name="Result" component={ResultScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
