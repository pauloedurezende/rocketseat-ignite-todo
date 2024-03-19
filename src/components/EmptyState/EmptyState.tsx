import { View, Text, Image } from 'react-native';

import { styles } from './styles';

import clipboard from '../../../assets/clipboard.png';

export default function EmptyState() {
  return (
    <View style={styles.container}>
      <Image source={clipboard} />

      <View style={styles.row}>
        <Text style={styles.title}>
          You don&apos;t have tasks registered yet
        </Text>
        <Text style={styles.subtitle}>
          Create tasks and organize your to-do items
        </Text>
      </View>
    </View>
  );
}
