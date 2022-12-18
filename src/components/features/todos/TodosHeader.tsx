import React, {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useAppDispatch, useAppSelector} from '../../../state/store';
import {
  filterTodos,
  removeCompleted,
  Todo,
  VisabilityFilter,
} from '../../../state/todos.slice';
import {COLORS} from '../../../constants/style.constants';

export const TodoHeader: FC = () => {
  const dispatch = useAppDispatch();
  const activeCount = useAppSelector(({todos}) =>
    todos.todoItems.reduce(
      (sum: number, t: Todo) => (t.completed ? sum : sum + 1),
      0,
    ),
  );

  return (
    <View style={styles.container}>
      <Pressable onPress={() => dispatch(removeCompleted())}>
        <Icon name="recycle" size={26} color={COLORS.tertiaryDark} />
      </Pressable>
      <Text style={styles.title}>Todo List ({activeCount})</Text>

      <RNPickerSelect
        placeholder={{label: 'Filter', value: null}}
        onValueChange={value => dispatch(filterTodos(value))}
        items={[
          {
            label: VisabilityFilter.All,
            value: VisabilityFilter.All,
          },
          {
            label: VisabilityFilter.Completed,
            value: VisabilityFilter.Completed,
          },
          {
            label: VisabilityFilter.Active,
            value: VisabilityFilter.Active,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
