import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {action,orginals,comedy, horror, romance, documentory} from './urls'
import React from 'react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={orginals} title="Netflix Orginals"/>
      <RowPost url={action} title="Action Movies"/>
      <RowPost url={comedy} title="Comedy Movies"/>
      <RowPost url={horror} title="Horror Movies"/>
      <RowPost url={romance} title="Romance Movies"/>
      <RowPost url={documentory} title="Documentories "/>
    </div>
  );
}

export default App;
