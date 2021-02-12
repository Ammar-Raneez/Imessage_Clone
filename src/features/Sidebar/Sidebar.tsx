import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import styles from './Sidebar.module.css'
import SearchIcon from '@material-ui/icons/Search'
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined'
import { SidebarChat } from '../SidebarChat/SidebarChat'

export function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar__header}>
                <Avatar className={styles.sidebar__avatar} />
                <div className={styles.sidebar__input}>
                    <SearchIcon />
                    <input placeholder="Search" />
                </div>
                <IconButton className={styles.sidebar__inputButton}>
                    <RateReviewOutlinedIcon />
                </IconButton>
            </div>

            <div className={styles.sidebar__chats}>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

