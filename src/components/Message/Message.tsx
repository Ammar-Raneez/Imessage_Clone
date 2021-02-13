import { Avatar } from '@material-ui/core'
import React from 'react'
import { MessageWrapper } from './Message.styles'

declare type MessageProps = {
    id: string;
    contents: string[];
}

export const Message: React.FC<MessageProps> = ({ id, contents }) => {
    return (
        <MessageWrapper>
            <Avatar />
            <p>This is a message</p>
            <small>timestamp</small>
        </MessageWrapper>
    )
}
