import styled from "styled-components";

export const MessageWrapper = styled.div `
    display: flex;
    align-items: center;
    position: relative;
    width: fit-content;
    justify-content: space-between;
    margin: 15px;

    > p {
        background-color: #f3f3f5;
        font-size: medium;
        padding: 15px;
        border-radius: 20px;
        margin: 10px;
        margin-right: auto;
    }

    > small {
        color: gray;
        position: absolute;
        font-size: 8px;
        bottom: -5px;
        right: 0;
    }
`