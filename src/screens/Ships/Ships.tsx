import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getShips } from 'selectors';
import actions from 'actions';

import ShipCard from './ShipCard';

import * as s from './Ships.styled';

const Ships: React.FC = () => {
    const ships = useSelector(getShips);

    useEffect(() => {
        actions.getShips();
    }, []);

    return (
        <s.ShipsContainer>
            {ships.map((ship: any) => (
                <ShipCard key={ship.name} ship={ship} />
            ))}
        </s.ShipsContainer>
    );
};

export default Ships;
