import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';

interface buttonProps {
  read: () => void;
  readOnTime: () => void;
}

export default function Home({ read, readOnTime }: buttonProps) {
  return (
    <>
      <Text style={styles.bigText}>Hur vill du läsa?</Text>
      <View style={styles.buttons}>
        <Button onPress={read} title="Läsa sidor"></Button>
        <Button onPress={readOnTime} title="Läsa på tid"></Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bigText: {
    fontSize: 44,
  },
  buttons: {
    gap: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 100,
  },
});
