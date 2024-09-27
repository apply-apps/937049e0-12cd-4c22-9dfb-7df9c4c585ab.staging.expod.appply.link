// App.js
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  const fullText = 'HELLO ALEX';
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{displayedText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default App;
// End of App.js