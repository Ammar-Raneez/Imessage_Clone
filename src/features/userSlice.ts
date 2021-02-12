import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface userState {
    user: string;
}

const initialState: userState = {
    user: "",
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<any>) => {
            state.user = action.payload;
        },
        logout: state => {
            state.user = "";
        }
    },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state: RootState) => state.user.user;
export default userSlice.reducer;
