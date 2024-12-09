import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';

interface readProps {
  doneReading: (pages: number[]) => void;
}

export default function Read({ doneReading }: readProps) {
  const [display, setDisplay] = useState<'visible' | 'hidden'>('visible');
  const [countdown, setCountdown] = useState<number>(3);
  const [pageCount, setPageCount] = useState(0);
  const [pages, setPages] = useState<number[]>([]);

  const specialStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      display: display === 'hidden' ? undefined : 'none',
      position: 'absolute',
    },
    countdown: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      display: display === 'hidden' ? 'none' : undefined,
      position: 'absolute',
      textAlign: 'center',
    },
  });

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function readPage() {
    const newPages = [...pages, Date.now()];
    const newPageCount = pageCount + 1;

    setPages(newPages);
    setPageCount(newPageCount);
    console.log(newPageCount);
  }

  function done() {
    const newPages = [...pages, Date.now()];
    const newPageCount = pageCount + 1;

    setPages(newPages);
    setPageCount(newPageCount);

    doneReading(newPages);
  }

  async function countdownFunction() {
    let value = countdown;

    value--;
    await sleep(1000);
    setCountdown(value);

    value--;
    await sleep(1000);
    setCountdown(value);

    await sleep(1000);
    setDisplay('hidden');
  }

  countdownFunction();

  return (
    <View style={styles.container}>
      <View style={specialStyles.container}>
        <Text style={styles.topBottomText}>Läsning:</Text>
        <Text style={styles.pageCount}>{pageCount}</Text>
        <Text style={styles.topBottomText}>sidor läst.</Text>
        <Button title="Läst en sida" onPress={readPage} big />
        <Button title="Avsluta" onPress={done} color="#ef1a2f" />
      </View>
      <View style={specialStyles.countdown}>
        <Text style={styles.topBottomText}>Läs om</Text>
        <Text style={styles.countdown}>{countdown}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageCount: {
    fontSize: 128,
    textAlignVertical: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBottomText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  countdown: {
    fontSize: 128,
  },
});
