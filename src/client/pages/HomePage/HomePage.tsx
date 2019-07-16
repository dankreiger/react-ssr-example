import React from 'react';

const HomePage: React.SFC = () => {
    return (
        <div>
            <div>I am the HomePage component woof</div>
            <button type="button" onClick={() => console.log('pressed')}>
                Press me
            </button>
        </div>
    );
};

export default {
    component: HomePage,
};
