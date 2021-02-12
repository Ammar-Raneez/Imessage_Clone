import React from 'react'
import { Chat } from '../Chat/Chat'
import { Sidebar } from '../Sidebar/Sidebar'
import styles from './IMessage.module.css'

export function IMessage() {
    return (
        <div className={styles.IMessage}>
            {/* sidebar */}
            <Sidebar />
            {/* chat */}
            <Chat />
        </div>
    )
}

