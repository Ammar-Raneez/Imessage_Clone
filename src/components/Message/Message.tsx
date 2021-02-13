import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { MessageWrapper } from './Message.styles'

declare type MessageProps = {
    id: string;
    contents: any;
}

export const Message: React.FC<MessageProps> = ({ id, contents: {
    timestamp, displayName, email, message, photo, uid
} }) => {
    const user = useSelector(selectUser);

    return (
        <MessageWrapper userEmail={user.email} senderEmail={email} >
            <Avatar className="message__photo" src={photo} />
            <p>{message}</p>
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
        </MessageWrapper>  
    )
}
