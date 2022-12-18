import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {useAppDispatch} from '../../../state/store';
import {filterTodos, VisabilityFilter} from '../../../state/todos.slice';

export const TodoHeader: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>

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
