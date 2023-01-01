import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { styles } from './styles';

import { EmptyState, TaskInfo } from '../../components';

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

        <View style={styles.content}>
          <View style={styles.info}>
            <TaskInfo title="Create" color="blue">
              {[].length}
            </TaskInfo>

            <TaskInfo title="Done" color="purple">
              {[].length}
            </TaskInfo>
          </View>

          <FlatList
            data={[]}
            showsVerticalScrollIndicator={false}
            renderItem={() => null}
            ListEmptyComponent={() => <EmptyState />}
          />
        </View>
      </View>
    </View>
  );
}
