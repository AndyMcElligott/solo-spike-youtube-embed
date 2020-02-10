import React from 'react';
import logo from './logo.svg';
import './App.css';

// bring in Youtube Componenet
import YoutubeDemo from './Youtube/Youtube';

function App() {
  return (
    <div className="App">
      {/* videoId coming from id in Youtube compononet */}
      <YoutubeDemo videoId = '_nBlN9yp9R8' />
    </div>
  );
}

export default App;
