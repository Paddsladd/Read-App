import { Text } from 'react-native';
import Button from '../components/Button';

interface endProps {
  points: number;
  returnToHome: () => void;
}

export default function End({ returnToHome, points }: endProps) {
  return (
    <>
      <Text>Klar!</Text>
      <Text>{points} poäng.</Text>
      <Button title="Hem" onPress={returnToHome} />
    </>
  );
}
