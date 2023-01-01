import { View, Image } from 'react-native';

import { styles } from './styles';

import logo from '../../../assets/logo.png';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
      </View>
    </View>
  );
}
