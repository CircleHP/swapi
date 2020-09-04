import styled from 'styled-components';

export const Search = styled.div`
    width: 600px;
    height: 60px;
    border-radius: 5px;
    padding: 5px;
    background: #ececec;
    color: #222831;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
`;

export const Input = styled.input`
    width: 70%;
    height: 100%;
    font-size: 19px;
    border: none;
    background: #ececec;
    margin: 0 10px;
    padding: 5px;
`;

export const SearchButton = styled.button`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #222831;
    color: #ececec;
    font-size: 19px;
    border: none;
    cursor: pointer;
`;
