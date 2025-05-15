import { StyleSheet } from 'react-native';



export default function TabTwoScreen() {
  return (
    <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <h1>Welcome to the Explore Tab!</h1>
      <p>Start exploring the app to see its features.</p>
      
    </div>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
