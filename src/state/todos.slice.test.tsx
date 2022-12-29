import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import {Provider} from 'react-redux';

import {TodoApp} from '../components/features/todos/TodoApp';
import {initStore} from './store';
import {VisabilityFilter} from './todos.slice';

test('add-button press with empty text input should NOT add new items to store', () => {
  // Arrange
  const initial = {
    todos: {
      todoItems: [],
      currentFilter: VisabilityFilter.All,
    },
  };
  const store = initStore(initial);
  render(
    <Provider store={store}>
      <TodoApp />
    </Provider>,
  );

  const addButton = screen.getByTestId('add-btn');

  // Act
  fireEvent.press(addButton);

  //Assert
  expect(store.getState().todos.todoItems.length).toBe(0);
});

test('add-button press with empty text input should not render new items in TodoList', () => {
  // Arrange
  const initial = {
    todos: {
      todoItems: [],
      currentFilter: VisabilityFilter.All,
    },
  };
  //   {id: 'abc123', title: 'fake todo item', completed: false, show: true},
  const store = initStore(initial);
  render(
    <Provider store={store}>
      <TodoApp />
    </Provider>,
  );

  const addButton = screen.getByTestId('add-btn');

  // Act
  fireEvent.press(addButton);

  //Assert
  expect(screen.getAllByLabelText('todo-item').length).toBe(0);
  // expect(screen.queryAllByLabelText('todo-item').length).toBe(0);
});
