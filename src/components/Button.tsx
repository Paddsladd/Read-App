import { Text, StyleSheet, Pressable } from 'react-native';

interface buttonProps {
  onPress: () => void;
  title: string;
  big?: boolean;
  color?: string;
}

export default function Button(props: buttonProps) {
  const { onPress, title, big, color } = props;
  const colorToUse = color ? color : '#059607';

  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 10,
      backgroundColor: colorToUse,
    },
    bigButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 52,
      paddingHorizontal: 48,
      borderRadius: 10,
      margin: 50,
      elevation: 3,
      backgroundColor: colorToUse,
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
    },
  });

  return (
    <Pressable style={big ? styles.bigButton : styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
