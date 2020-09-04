import React from 'react';
import { Switch, Route } from 'react-router-dom';

import 'assets/global.css';

import Ships from 'screens/Ships';
import ShipDetailed from 'screens/ShipDetailed';

const App: React.FC = () => {
    return (
        <Switch>
            <Route path='/ship/:id'>
                <ShipDetailed />
            </Route>
            <Route exact path='/'>
                <Ships />
            </Route>
        </Switch>
    );
};

export default App;
