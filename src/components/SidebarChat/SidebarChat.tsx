import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { SidebarChatWrapper } from './SidebarChat.styles'
import { setChat } from '../../features/chatSlice'
import db from '../../firebase'

declare type SidebarChatProps = {
    id: string;
    chatName: string;
}

export const SidebarChat: React.FC<SidebarChatProps> = ({ id, chatName }) => {
    const dispatch = useDispatch();
    const [chatInfo, setChatInfo] = useState<any[]>([]);

    useEffect(() => {
        db.collection("chats")
            .doc(id)
            .collection("messages")
            .orderBy("timestamp", "desc")
            .onSnapshot(snapShot => setChatInfo(snapShot.docs.map(doc => ({
                data: doc.data()
            }))))
    }, [id])

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
            <Avatar src={chatInfo[0]?.data.photo} />
            <div key={id} className="sidebarChat__info">
                <h3>{chatName}</h3>
                <p>{chatInfo[0]?.data.message}</p>
                <small>{new Date(chatInfo[0]?.data.timestamp?.toDate()).toLocaleString()}</small>
            </div>
        </SidebarChatWrapper>
    )
}
