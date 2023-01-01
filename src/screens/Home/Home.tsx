import { useState } from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { nanoid } from 'nanoid';

import { styles } from './styles';

import { EmptyState, Task, TaskInfo } from '../../components';

import logo from '../../../assets/logo.png';
import plus from '../../../assets/plus.png';

import { TaskItem } from '../../@types';

export default function Home() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  function handleTaskCreate() {
    if (input.length === 0) return;

    const task = { id: nanoid(), title: input, done: false };

    setTasks((prevState) => [...prevState, task]);
    setInput('');
  }

  function handleToggleTaskDone(id: TaskItem['id']) {
    setTasks((prevState) => {
      return prevState.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }

        return task;
      });
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
      </View>

      <View style={styles.main}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Add a new task"
            placeholderTextColor="#808080"
            onChangeText={setInput}
            value={input}
          />

          <TouchableOpacity style={styles.button} onPress={handleTaskCreate}>
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
            data={tasks}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Task
                key={item.id}
                done={item.done}
                onToggleDonePress={() => handleToggleTaskDone(item.id)}
              >
                {item.title}
              </Task>
            )}
            ListEmptyComponent={() => <EmptyState />}
          />
        </View>
      </View>
    </View>
  );
}
