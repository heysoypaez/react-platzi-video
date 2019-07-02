import React from 'react';
import Home from "./pages/containers/home.js";
import data from "./api.json";
import './App.css';

function App(props) {

  return (
    <div className="App">
      <Home data={data} />
    </div>
  );
}

export default App;
