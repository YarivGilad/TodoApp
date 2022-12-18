import React, {FC, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
// import {useDispatch} from 'react-redux';
import {useAppDispatch} from '../../../state/store';
import {addTodo} from '../../../state/todos.slice';
import {Button} from '../../ui/Button';

const AddTodo: FC = () => {
  const [todoTitle, setTodoTitle] = useState<string>('');
  //   const dispatch = useDispatch();
  const dispatch = useAppDispatch();

  const createTodo = () => {
    if (todoTitle.length) {
      dispatch(addTodo(todoTitle));
      setTodoTitle('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={todoTitle}
        placeholder="Your next task"
        style={styles.input}
        onChangeText={setTodoTitle}
      />
      <Button label="+" onPress={createTodo} />
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingTop: 10,
  },
  input: {
    flex: 1,
    outline: 'none',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 18,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f5f5f5',
  },
});
