import { Avatar } from '@material-ui/core'
import React from 'react'
import styles from './SidebarChat.module.css'

export function SidebarChat() {
    return (
        <div className={styles.sidebarChat}>
            <Avatar />
            <div className={styles.sidebarChat__info}>
                <h3>Channel Name</h3>
                <p>Last Message sent...</p>
                <small>timestamp</small>
            </div>
        </div>
    )
}
