import { View, Text } from 'react-native';

import { styles } from './styles';

type Props = {
  title: string;
  color: 'blue' | 'purple';
  children: number;
};

export default function TaskInfo({ title, color, children }: Props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles[color]]}>{title}</Text>

      <View style={styles.badge}>
        <Text style={styles.counter}>{children}</Text>
      </View>
    </View>
  );
}
