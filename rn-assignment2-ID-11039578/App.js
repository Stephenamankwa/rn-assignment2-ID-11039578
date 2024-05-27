
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text styles={styles.text}>
        My name is <Text style={styles.boldText}>Stephen</Text>
        </Text>
      <StatusBar style="auto" />
    </View>
  );s
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 24,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
