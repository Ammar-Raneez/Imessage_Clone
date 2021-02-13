import { IconButton } from '@material-ui/core';
import MicNoneIcon  from '@material-ui/icons/MicNone';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectchatId, selectchatName } from '../../features/chatSlice';
import db from '../../firebase';
import { IMessage } from '../../types';
import { Message } from '../Message/Message';
import { ChatWrapper } from './Chat.styles';
import firebase from 'firebase'
import { selectUser } from '../../features/userSlice';

export function Chat() {
    const user = useSelector(selectUser);
    const chatName = useSelector(selectchatName);
    const chatId = useSelector(selectchatId);
    const [input, setInput] = useState<string>("");
    const [messages, setMessages] = useState<IMessage[]>([]);

    useEffect(() => {
        if (chatId) {
            console.log(chatId)
            db.collection('chats')
                .doc(chatId)
                .collection("messages")
                .orderBy("timestamp", "desc")
                .onSnapshot(snapshot => (
                    setMessages(
                        snapshot.docs.map(doc => ({
                            id: doc.id,
                            data: doc.data()
                        }))
                    )
                ))
        }
    }, [chatId])

    const sendMessage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        db.collection("chats")
            .doc(chatId)
            .collection("messages")
            .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: input,
                uid: user.uid,
                photo: user.photo,
                email: user.email,
                displayName: user.displayName
            })

        setInput("");
    }

    return (
        <ChatWrapper>
            <div className="chat__header">
                <h4>To: <span className="chat__name">{chatName}</span></h4>
                <strong>Details</strong>
            </div>

            {/* chat messages */}
            <div className="chat__messages">
                {messages.map(({ id, data }) => (
                    <Message id={id} contents={data} />
                ))}
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
