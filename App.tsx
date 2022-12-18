import React, {FC} from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import store from './src/state/store';
import {TodoApp} from './src/components/features/todos/TodoApp';

const App: FC = () => {
  return (
    <ReduxProvider store={store}>
      <TodoApp />
    </ReduxProvider>
  );
};

export default App;
