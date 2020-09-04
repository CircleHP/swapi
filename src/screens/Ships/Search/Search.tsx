import React, { useRef } from 'react';

import actions from 'actions';

import * as s from './Search.styled';

const Search: React.FC = () => {
    const input = useRef<HTMLInputElement | null>(null);

    const handleSearch = () => {
        // @ts-ignore
        actions.searchShip(input.current.value)
    };

    return (
        <s.Search>
            <s.Input type='text' maxLength={40} ref={input}/>
            <s.SearchButton onClick={handleSearch}>Search</s.SearchButton>
        </s.Search>
    );
};

export default Search;
