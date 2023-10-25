
import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import Cesta from './src/telas/Cesta';

import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import AppLoading from 'expo-app-loading';

export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserraRegular": Montserrat_400Regular,
    "MontserraBold": Montserrat_700Bold
  });

  if (!fonteCarregada) {
    return <AppLoading />
  }

  return (
    <View>
      <StatusBar />
      <Cesta />
    </View>
  );
}
