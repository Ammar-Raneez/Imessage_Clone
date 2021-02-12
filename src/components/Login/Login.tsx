import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from '../../firebase'
import styles from './Login.module.css'

export function Login() {
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .catch((err) => console.log(err.message))
    }

    return (
        <div className={styles.login}>
            <div className={styles.login__logo}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png" alt="logo" />
                <h1>IMessage</h1>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}
