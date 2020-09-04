import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getShips } from 'selectors';
import actions from 'actions';

import Search from './Search';
import ShipCard from './ShipCard';
import Pagination from './Pagination';

import * as s from './Ships.styled';

const Ships: React.FC = () => {
    const ships = useSelector(getShips);

    useEffect(() => {
        actions.getShips();
    }, []);

    return (
        <s.ShipsContainer>
            <Search />
            {ships.map((ship: any) => (
                <ShipCard key={ship.name} ship={ship} />
            ))}
            <Pagination />
            {ships.length === 0 &&
                <s.SearchError>
                    No results
                </s.SearchError>
            }
        </s.ShipsContainer>
    );
};

export default Ships;
