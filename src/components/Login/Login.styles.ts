import styled from "styled-components";

export const LoginWrapper = styled.div `
    display: grid;
    place-items: center;
    text-align: center;
    height: 100vh;
    width: 100%;

    > div > img {
        object-fit: contain;
        height: 250px;
    }

    > button {
        width: 300px;
        background-color: #3e93fd;
        color: #eff2f5;
        font-weight: 600;
        transition: 0.2s ease;
    }

    > button:hover {
        background-color: gainsboro;
        color: #3e93fd;
    }
`