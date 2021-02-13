import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

interface chatState {
    chatId: string;
    chatName: string;
}

const initialState: chatState = {
    chatId: "",
    chatName: ""
};

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setChat: (state, action: PayloadAction<chatState>) => {
            state.chatId = action.payload.chatId;
            state.chatName = action.payload.chatName;
        },
    },
});

export const { setChat } = chatSlice.actions;
export const selectchatName = (state: RootState) => state.chat.chatName;
export const selectchatId = (state: RootState) => state.chat.chatId;
export default chatSlice.reducer;
