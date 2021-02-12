import React from 'react'
import { Sidebar } from '../Sidebar/Sidebar'
import styles from './IMessage.module.css'

export function IMessage() {
    return (
        <div className={styles.IMessage}>
            {/* sidebar */}
            <Sidebar />
            {/* chat */}
        </div>
    )
}

