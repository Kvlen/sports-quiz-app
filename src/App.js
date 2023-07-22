import React from 'react';
import Header from './Components/Header';
import Question from './Components/Question';
import './App.css'; // Import the custom styles
import './style.css'; // Import the custom styles

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Question />
      </div>
    </div>
  );
};

export default App;
