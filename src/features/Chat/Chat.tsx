import React from 'react'
import styles from './Chat.module.css'

export function Chat() {
    return (
        <div className={styles.chat}>
            <div className={styles.chat__header}>
                <h4>To: <span className={styles.chat__name}>Channel name</span></h4>
                <strong>Details</strong>
            </div>
        </div>
    )
}
