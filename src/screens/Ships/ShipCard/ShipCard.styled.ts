import styled from 'styled-components';

export const ShipCard = styled.div`
    height: 60px;
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #30475e;
    color: #ececec;
    font-size: 19px;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    opacity: 0.6;
    transition: all .25s;
    margin-bottom: 15px;

    &:hover {
        opacity: 1;
    }
`;
