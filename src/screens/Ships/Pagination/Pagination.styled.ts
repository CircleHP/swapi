import styled from 'styled-components';

export const Pagination = styled.div`
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ActionButton = styled.button`
    width: 30px;
    height: 30px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ececec;
    background: #30475e;
    border: none;
    cursor: pointer;
    margin: 0 10px;
`;

interface TPaginationItem {
    active?: boolean;
}

export const PaginationItem = styled.div<TPaginationItem>`
    width: 30px;
    height: 30px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ececec;
    background: ${(props) => props.active ? '#f2a365' : '#30475e'};
    border: none;
`;
