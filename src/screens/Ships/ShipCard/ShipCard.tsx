import React from 'react';
import { Link } from 'react-router-dom';

import * as s from './ShipCard.styled';

interface TOwnProps {
    ship: any;
}

const ShipCard: React.FC<TOwnProps> = ({ ship }) => {
    if(!ship) {
        return null;
    };

    return (
        <s.ShipCard>
            <Link to={`/ship/${encodeURI(ship.name)}`}>
                <div>{ship.name}</div>
            </Link>
        </s.ShipCard>
    );
};

export default ShipCard;
