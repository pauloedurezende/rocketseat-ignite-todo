import { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';

import not_checked from '../../../assets/not-checked.png';
import checked from '../../../assets/checked.png';
import trash from '../../../assets/trash.png';
import trash_active from '../../../assets/trash-active.png';

import { ButtonState } from '../../@types';

type Props = {
  children: string;
  done: boolean;
  onToggleDonePress: () => void;
};

export default function Task({ children, done, onToggleDonePress }: Props) {
  const [currentTrashIcon, setCurrentTrashIcon] = useState(ButtonState.Normal);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftButton} onPress={onToggleDonePress}>
        {
          {
            true: <Image source={checked} />,
            false: <Image source={not_checked} />,
          }[`${done}`]
        }
      </TouchableOpacity>
      <Text style={styles.title}>{children}</Text>
      <TouchableOpacity
        style={[
          styles.rightButton,
          currentTrashIcon === ButtonState.Active && styles.active,
        ]}
        onPressIn={() => setCurrentTrashIcon(ButtonState.Active)}
        onPressOut={() => setCurrentTrashIcon(ButtonState.Normal)}
      >
        {
          {
            normal: <Image source={trash} />,
            active: <Image source={trash_active} />,
          }[currentTrashIcon]
        }
      </TouchableOpacity>
    </View>
  );
}
