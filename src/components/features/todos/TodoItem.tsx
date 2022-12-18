import React, {FC} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Todo, toggleTodo, removeTodo} from '../../../state/todos.slice';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {COLORS} from '../../../constants/style.constants';

interface IProps extends Todo {
  index: number;
}
const TodoItem: FC<IProps> = ({index, id, completed, title}) => {
  const dispatch = useDispatch();

  const backgroundColor = index % 2 !== 0 ? COLORS.secondaryLight : 'white';

  return (
    <View style={{...styles.container, backgroundColor}}>
      <BouncyCheckbox
        size={30}
        fillColor={COLORS.primary}
        unfillColor="white"
        text={title}
        innerIconStyle={styles.innerCheckIcon}
        textStyle={styles.title}
        onPress={() => dispatch(toggleTodo(id))}
        isChecked={completed}
      />
      <Pressable onPress={() => dispatch(removeTodo(id))}>
        <Icon name="remove" size={26} color={COLORS.error} />
      </Pressable>
    </View>
  );
};

export default TodoItem;
const styles = StyleSheet.create({
  container: {
    padding: 12,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    color: COLORS.greyLight,
  },
  innerCheckIcon: {
    borderWidth: 3,
  },
});
