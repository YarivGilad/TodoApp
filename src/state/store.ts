import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {
  configureStore,
  PreloadedState,
  StateFromReducersMapObject,
} from '@reduxjs/toolkit';

import todosSlice from './todos.slice';

const reducer = {
  todos: todosSlice.reducer,
};

export type RootState = StateFromReducersMapObject<typeof reducer>;

export const initStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer,
    preloadedState,
  });
};
const store = initStore();

export default store;

type Store = ReturnType<typeof initStore>;

export type AppDispatch = Store['dispatch'];

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
