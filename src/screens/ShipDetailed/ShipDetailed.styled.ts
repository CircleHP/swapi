import styled from 'styled-components';

export const ShipDetailed = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #222831;
    padding: 40px;
    flex-wrap: wrap;
`;

export const Card = styled.div`
    width: 400px;
    min-height: 300px;
    height: auto;
    background: #30475e;
    color: #ececec;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 19px;
    padding: 5px;
    border-radius: 0 0 5px 5px;
`;

export const BackButton = styled.button`
    width: 400px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 19px;
    border: none;
    cursor: pointer;
    border-radius: 5px 5px 0 0;

    a {
        text-decoration: none;
        color: #222831;
        background: #ececec;
    }
`;
