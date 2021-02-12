import React, { useState } from 'react'
import styles from './Chat.module.css'


export function Chat() {
    const [input, setInput] = useState("");

    const sendMessage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        //firebase stuff

        setInput("");
    }

    return (
        <div className={styles.chat}>
            <div className={styles.chat__header}>
                <h4>To: <span className={styles.chat__name}>Channel name</span></h4>
                <strong>Details</strong>
            </div>

            <div className={styles.chat__input}>
                <form>
                    <input value={input} onChange={event => setInput(event.target.value)} placeholder="IMessage" type="text" />
                    <button onClick={event => sendMessage(event)}>Send Message</button>
                </form>
            </div>
        </div>
    )
}
