import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import { CurrencyList } from '../components/CurrencyList';
import { useGlobalSearchParams } from 'expo-router';

export default function ModalScreen() {
  const param = useGlobalSearchParams();
  const { params } = param;
  return (
    <View style={styles.container}>
      <CurrencyList params={params}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
