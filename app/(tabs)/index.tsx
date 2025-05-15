import { StyleSheet } from 'react-native';



export default function HomeScreen() {
  return (
    <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <h1>Welcome to the App!</h1>
      <p>Start exploring the app to see its features.</p>
    </div>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
