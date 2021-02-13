import { Avatar } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { SidebarChatWrapper } from './SidebarChat.styles'
import { setChat } from '../../features/chatSlice'

declare type SidebarChatProps = {
    id: string;
    chatName: string;
}

export const SidebarChat: React.FC<SidebarChatProps> = ({ id, chatName }) => {
    const dispatch = useDispatch();

    return (
        <SidebarChatWrapper
            onClick={() => {
                dispatch(
                    setChat({
                        chatId: id,
                        chatName
                    })
                )
            }}
        >
            <Avatar />
            <div key={id} className="sidebarChat__info">
                <h3>{chatName}</h3>
                <p>Last Message sent...</p>
                <small>timestamp</small>
            </div>
        </SidebarChatWrapper>
    )
}
