import React from 'react';

const Home = () => {
  return (
    <div>
      <div>I'm the home component woof</div>
      <button onClick={() => console.log('pressed')}>Press me</button>
    </div>
  );
};

export default Home;
