import styled from "styled-components";

export const SidebarWrapper = styled.div `
    flex: 0.35;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    border-right: 1px solid lightgray;

    > div {
        display: flex;
        align-items: center;
        padding: 10px;
        height: 50px;
    }

    .sidebar__avatar {
        cursor: pointer;
        margin: 10px;
    }

    .sidebar__input {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        background-color: #e1e1e1;
        color: gray;
        border-radius: 5px;
    }

    .sidebar__input > input {
        border: none;
        background: transparent;
        outline-width: 0;
    }

    .sidebar__chats::-webkit-scrollbar {
        display: none;
    }

    .sidebar__chats {
        display: flex;
        flex-direction: column;
        height: 100vh;
        overflow-y: scroll;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
`