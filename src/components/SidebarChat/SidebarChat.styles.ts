import styled from "styled-components";

export const SidebarChatWrapper = styled.div `
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid lightgray;
    cursor: pointer;
    transition: 0.2s ease;
    width: 100%;

    &:hover {
        background-color: #3e93fd;
        color: white;
    }

    .sidebarChat__info {
        margin-left: 15px;
        position: relative;
        width: 100%;
    }

    .sidebarChat__info > small {
        position: absolute;
        top: 5px;
        right: 0;
    }
`