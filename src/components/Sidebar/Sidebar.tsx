import { Avatar, IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined'
import { SidebarChat } from '../SidebarChat/SidebarChat'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import db, { auth } from '../../firebase'
import { ISidebarChat } from '../../types'
import { SidebarWrapper } from './Sidebar.styles'

export function Sidebar() {
    const user = useSelector(selectUser);
    const [chats, setChats] = useState<ISidebarChat[]>([]);

    useEffect(() => {
        db.collection('chats').onSnapshot(snapshot => {
            setChats(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])

    function addChat() {
        const chatName = prompt("Please enter a chat name: ")

        if (chatName) {
            db.collection('chats').add({
                chatName: chatName
            })
        }
    }

    return (
        <SidebarWrapper>
            <div className="sidebar__header">
                <Avatar onClick={() => auth.signOut()} src={user.photo} className="sidebar__avatar" />
                <div className="sidebar__input">
                    <SearchIcon />
                    <input placeholder="Search" />
                </div>
                <IconButton className="sidebar__inputButton">
                    <RateReviewOutlinedIcon onClick={addChat} />
                </IconButton>
            </div>

            <div className="sidebar__chats">
                {chats.map(({ id, data: { chatName } }) => (
                    <SidebarChat
                        key={id}
                        id={id}
                        chatName={chatName}
                    />
                ))}
            </div>
        </SidebarWrapper>
    )
}

