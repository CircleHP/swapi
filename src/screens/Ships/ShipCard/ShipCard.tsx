import React from 'react';

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
            <div>{ship.name}</div>
        </s.ShipCard>
    );
};

export default ShipCard;
