import { Avatar, IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import styles from './Sidebar.module.css'
import SearchIcon from '@material-ui/icons/Search'
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined'
import { SidebarChat } from '../SidebarChat/SidebarChat'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import db, { auth } from '../../firebase'
import { ISidebarChat } from '../../types'

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

    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar__header}>
                <Avatar onClick={() => auth.signOut()} src={user.photo} className={styles.sidebar__avatar} />
                <div className={styles.sidebar__input}>
                    <SearchIcon />
                    <input placeholder="Search" />
                </div>
                <IconButton className={styles.sidebar__inputButton}>
                    <RateReviewOutlinedIcon />
                </IconButton>
            </div>

            <div className={styles.sidebar__chats}>
                {chats.map(chat => (
                    <SidebarChat />
                ))}
            </div>
        </div>
    )
}

