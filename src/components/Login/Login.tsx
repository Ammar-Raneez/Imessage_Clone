import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from '../../firebase'
import { LoginWrapper } from './Login.styles'

export function Login() {
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .catch((err) => alert(err.message))
    }

    return (
        <LoginWrapper>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png" alt="logo" />
                <h1>IMessage</h1>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </LoginWrapper>
    )
}
