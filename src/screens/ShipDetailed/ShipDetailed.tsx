import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import actions from 'actions';
import { getShipDetails } from 'selectors';

import * as s from './ShipDetailed.styled';

const ShipDetailed: React.FC = () => {
    const location = useLocation();
    const searchValue = location.pathname.replace('/ship/', '')
    const shipDetails = useSelector(getShipDetails);

    useEffect(() => {
        actions.getShipDetails(searchValue);
    }, [searchValue]);

    if(!shipDetails) {
        return null
    };

    return (
        <s.ShipDetailed>
            <s.BackButton>
                <Link to='/'>
                    Back to ships
                </Link>
            </s.BackButton>
            <s.Card>
                <div>Name: {shipDetails.name}</div>
                <div>Model: {shipDetails.model}</div>
                <div>Class: {shipDetails.starship_class}</div>
                <div>MGLT: {shipDetails.MGLT}</div>
                <div>Cost: {shipDetails.cost_in_credits}</div>
                <div>Hyper-Rating: {shipDetails.hyperdrive_rating}</div>
                <div>Length: {shipDetails.length}</div>
                <div>Manufacturer: {shipDetails.manufacturer}</div>
            </s.Card>
        </s.ShipDetailed>
    );
};

export default ShipDetailed;
