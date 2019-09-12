import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = (props) => {
  return (
    <div className="App">
      <div className='wrapper'>
        <Header />
        <Navbar />
        <Profile />
      </div>
    </div>
  );
}

export default App;
