import React from 'react';

import actions from 'actions';

const App: React.FC = () => {
    return (
        <div>
            <button onClick={() => actions.testAction()}>test</button>
        </div>
    );
};

export default App;
