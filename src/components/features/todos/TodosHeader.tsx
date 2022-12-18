import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {useAppDispatch, useAppSelector} from '../../../state/store';
import {filterTodos, Todo, VisabilityFilter} from '../../../state/todos.slice';

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
    marginVertical: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
