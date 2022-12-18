import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {useAppSelector} from '../../../state/store';
import TodoItem from './TodoItem';
import {TodoHeader} from './TodosHeader';

export function TodoList() {
  const todos = useAppSelector(state =>
    state.todos.todoItems.filter(t => t.show),
  );

  if (!todos.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Start creating a new todo</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <TodoHeader />

      <FlatList
        style={styles.list}
        keyExtractor={item => item.id}
        data={todos}
        renderItem={({item, index}) => <TodoItem index={index} {...item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    flex: 1,
    // justifyContent: 'flex-start',
    // borderWidth: 2,
    // borderStyle: 'dashed',
    // borderColor: 'cyan',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    // paddingTop: 30,
    // paddingBottom: 30,
  },
});
