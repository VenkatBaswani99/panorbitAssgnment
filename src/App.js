
import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage"

import Layout from './Layout';

function App() {
  return (

  <Router>

      <Route path="/" exact component = {LandingPage}/>
      <Layout/>
    
  </Router>

  );
}

export default App;


