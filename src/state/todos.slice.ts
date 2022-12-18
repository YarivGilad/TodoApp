import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
  show: boolean;
};

export enum VisabilityFilter {
  All = 'All',
  Active = 'Active',
  Completed = 'Completed',
}

export type TodosState = {
  todoItems: Todo[];
  currentFilter: VisabilityFilter;
};

const initialState: TodosState = {
  todoItems: [],
  currentFilter: VisabilityFilter.All,
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      console.log('addTodo::' + action.payload);
      state.todoItems.push({
        id: uid(),
        title: action.payload,
        completed: false,
        show: true,
      });
    },
    toggleTodo(state, action: PayloadAction<string>) {
      console.log('toggleTodo::' + action.payload);
      const todo = state.todoItems.find(t => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        todo.show = showHelper(todo, state.currentFilter);
      }
    },
    filterTodos(state, action: PayloadAction<VisabilityFilter>) {
      state.currentFilter = action.payload;
      state.todoItems.forEach((todo: Todo) => {
        todo.show = showHelper(todo, action.payload);
      });
    },
    removeTodo(state, action: PayloadAction<string>) {
      const index = state.todoItems.findIndex(
        (todo: Todo) => todo.id === action.payload,
      );
      state.todoItems.splice(index, 1);
    },
    removeCompleted(state) {
      state.todoItems = state.todoItems.filter(
        (todo: Todo) => todo.completed === false,
      );
    },
  },
});

function showHelper(todo: Todo, filter: VisabilityFilter) {
  switch (filter) {
    case VisabilityFilter.All:
      return true;
    case VisabilityFilter.Active:
      return todo.completed === false;
    case VisabilityFilter.Completed:
      return todo.completed === true;
  }
}

export const {addTodo, toggleTodo, filterTodos, removeTodo, removeCompleted} =
  todosSlice.actions;

export default todosSlice.reducer;

const uid = () => Math.random().toString(36).slice(2, 8);

/*
import { createReducer, createAction } from '@reduxjs/toolkit';

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = createAction<string>(ADD_TODO);
export const toggleTodo = createAction<number>(TOGGLE_TODO);

const initialState: string[] = [];

const todosReducer = createReducer(initialState, {
  [ADD_TODO]: (state, action) => {
    state.push(action.payload);
  },
  [TOGGLE_TODO]: (state, action) => {
    const todo = state[action.payload];
    if (todo) {
      todo.completed = !todo.completed;
    }
  },
});

export default todosReducer; */
