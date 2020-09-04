import styled from 'styled-components';

export const ShipCard = styled.div`
    height: 60px;
    width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #30475e;
    font-size: 19px;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    opacity: 0.6;
    transition: all .25s;
    margin-bottom: 15px;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: #ececec;
        text-decoration: none;
    }

    &:hover {
        opacity: 1;
    }
`;
