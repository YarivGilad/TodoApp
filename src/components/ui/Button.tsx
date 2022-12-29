import React, {FC} from 'react';
import {StyleSheet, Text, Pressable, PressableProps} from 'react-native';
import {COLORS} from '../../constants/style.constants';

interface IProps extends PressableProps {
  label: string;
  onPress: () => void;
}

export const Button: FC<IProps> = ({label, onPress, ...props}) => {
  return (
    <Pressable
      {...props}
      onPress={onPress}
      style={({pressed}) =>
        pressed ? [styles.button, styles.buttonPressed] : styles.button
      }>
      <Text style={styles.buttonLabel}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    padding: 15,
    paddingRight: 20,
    paddingLeft: 20,
    marginLeft: 10,
    borderRadius: 8,
  },
  buttonPressed: {
    backgroundColor: COLORS.primaryLight,
  },
  buttonLabel: {
    color: 'white',
    fontSize: 22,
    fontWeight: '500',
    // textTransform: 'uppercase',
  },
});
