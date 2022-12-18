import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import {TodoList} from './TodoList';
import AddTodo from './AddTodo';

export const TodoApp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TodoList />
      <AddTodo />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
    marginHorizontal: 22,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
