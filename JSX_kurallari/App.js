import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const message = "JavaScript";
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>React Native</Text>
      <Text style={styles.content}>React JS </Text>
      <Text style={{fontSize :20, color: "blue" }}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tittle: {
    fontSize: 50,
    color: "red"
  },
  content: {
    fontSize: 30,
  }
});
