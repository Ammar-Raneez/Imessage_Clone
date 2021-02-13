import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import chatReducer from '../features/chatSlice';
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
