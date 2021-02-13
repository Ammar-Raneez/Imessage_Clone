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
        ${({ userEmail, senderEmail }) => (
            (userEmail === senderEmail) && `
                order: 1;
                margin: 15px;
            `
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
        ${({ userEmail, senderEmail }) => (
            (userEmail === senderEmail) && `
                background-color: #3cabfa;
                color: white;
            `
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