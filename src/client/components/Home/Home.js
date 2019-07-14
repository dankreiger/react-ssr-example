import React from 'react';

const Home = () => {
  return (
    <div>
      <div>I am the home component woof</div>
      <button type="button" onClick={() => console.log('pressed')}>
        Press me
      </button>
    </div>
  );
};

export default Home;
