import { Avatar } from '@material-ui/core'
import React from 'react'
import { SidebarChatWrapper } from './SidebarChat.styles'

declare type SidebarChatProps = {
    id: string;
    chatName: string;
}

export const SidebarChat: React.FC<SidebarChatProps> = ({ id, chatName }) => {
    return (
        <SidebarChatWrapper>
            <Avatar />
            <div className="sidebarChat__info">
                <h3>{chatName}</h3>
                <p>Last Message sent...</p>
                <small>timestamp</small>
            </div>
        </SidebarChatWrapper>
    )
}
