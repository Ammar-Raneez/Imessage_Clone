import { Avatar } from '@material-ui/core'
import React from 'react'
import { SidebarChatWrapper } from './SidebarChat.styles'

export function SidebarChat() {
    return (
        <SidebarChatWrapper>
            <Avatar />
            <div className="sidebarChat__info">
                <h3>Channel Name</h3>
                <p>Last Message sent...</p>
                <small>timestamp</small>
            </div>
        </SidebarChatWrapper>
    )
}
