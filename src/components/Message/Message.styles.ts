import styled from "styled-components";

declare type MessageWrapperProps = {
    userEmail: string;
    senderEmail: string;
}

export const MessageWrapper = styled.div<MessageWrapperProps> `
    display: flex;
    align-items: center;
    position: relative;
    width: fit-content;
    justify-content: space-between;
    margin: 15px;
    margin-left: ${({ userEmail, senderEmail }) => (
        (userEmail === senderEmail) && "auto"
    )};

    >.message__photo {
        order: 0;
    }

    > .message__photo {
        order:  ${({ userEmail, senderEmail }) => (
            (userEmail === senderEmail) && "1"
        )};
        margin:  ${({ userEmail, senderEmail }) => (
            (userEmail === senderEmail) && "15px"
        )};
    }

    > p {
        background-color: #f3f3f5;
        font-size: medium;
        padding: 15px;
        border-radius: 20px;
        margin: 10px;
        margin-right: auto;
    }

    > p {
        background-color: ${({ userEmail, senderEmail }) => (
            (userEmail === senderEmail) && "#3cabfa"
        )};
        color: ${({ userEmail, senderEmail }) => (
            (userEmail === senderEmail) && "white"
        )};
    }

    > small {
        color: gray;
        position: absolute;
        font-size: 8px;
        bottom: -5px;
        right: 0;
    }
`