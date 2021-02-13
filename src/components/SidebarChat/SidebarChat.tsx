import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { SidebarChatWrapper } from './SidebarChat.styles'
import { setChat } from '../../features/chatSlice'
import db from '../../firebase'
import { ISidebarChatInfo } from '../../types'

declare type SidebarChatProps = {
    id: string;
    chatName: string;
}

export const SidebarChat: React.FC<SidebarChatProps> = ({ id, chatName }) => {
    const dispatch = useDispatch();
    const [chatInfo, setChatInfo] = useState<ISidebarChatInfo[]>([]);

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
            <Avatar src={chatInfo[0]?.photo} />
            <div key={id} className="sidebarChat__info">
                <h3>{chatName}</h3>
                <p>{chatInfo[0]?.message}</p>
                <small>{new Date(chatInfo[0]?.timestamp?.toDate()).toLocaleString()}</small>
            </div>
        </SidebarChatWrapper>
    )
}
