import { IconButton } from '@material-ui/core';
import MicNoneIcon  from '@material-ui/icons/MicNone';
import React, { useState } from 'react'
import { Message } from '../Message/Message';
import { ChatWrapper } from './Chat.styles';

export function Chat() {
    const [input, setInput] = useState<string>("");

    const sendMessage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        //firebase stuff

        setInput("");
    }

    return (
        <ChatWrapper>
            <div className="chat__header">
                <h4>To: <span className="chat__name">Channel name</span></h4>
                <strong>Details</strong>
            </div>

            {/* chat messages */}
            <div className="chat__messages">
                <Message />
            </div>

            <div className="chat__input">
                <form>
                    <input value={input} onChange={event => setInput(event.target.value)} placeholder="IMessage" type="text" />
                    <button onClick={event => sendMessage(event)}>Send Message</button>
                </form>

                <IconButton>
                    <MicNoneIcon className="chat__mic" />
                </IconButton>
            </div>
        </ChatWrapper>
    )
}
