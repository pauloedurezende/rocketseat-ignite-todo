import { View, Image, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';

import logo from '../../../assets/logo.png';
import plus from '../../../assets/plus.png';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
      </View>

      <View style={styles.main}>
        <View style={styles.form}>
          <TextInput
            placeholder="Add a new task"
            placeholderTextColor="#808080"
            style={styles.input}
          />

          <TouchableOpacity style={styles.button}>
            <Image source={plus} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
