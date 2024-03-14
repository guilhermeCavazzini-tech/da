import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

function getRandomIntInclusive(min:number, max:number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  const randomNumber = getRandomIntInclusive(1, 7);

  return (
    <SafeAreaView>
      <View><Text>Numero aleatorio entre 1 e 5: {randomNumber}</Text></View>
    </SafeAreaView>
  );
}

export default App;