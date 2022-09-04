import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { loadState } from './browser-storage';
import plansReducer from './features/plans/planSlice';
import currentCoordsReduced from './features/currentCoords/currentCoords';

const reducers = combineReducers({
  plans: plansReducer,
  currentCoords: currentCoordsReduced
});

export const store = configureStore({
  devTools: true,
  reducer: reducers,
  preloadedState: loadState(),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
