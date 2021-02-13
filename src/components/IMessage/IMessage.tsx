import React from 'react'
import { Chat } from '../Chat/Chat'
import { Sidebar } from '../Sidebar/Sidebar'
import { IMessageWrapper } from './IMessage.styles'

export function IMessage() {
    return (
        <IMessageWrapper>
            {/* sidebar */}
            <Sidebar />
            {/* chat */}
            <Chat />
        </IMessageWrapper>
    )
}

