import React from 'react';
import './App.css'; 

import PortComposition from './components/Portfolio/PortComposition';
import Theme from './components/Portfolio/Theme';
import NewData from './components/Portfolio/NewData';
import {Routes,Route} from 'react-router-dom';
import LandingPage from './components/Portfolio/LandingPage';
import PortHeader from './components/Portfolio/PortHeader';

function App() {
  
  const addPortfolioData=(expenses)=>{
    console.log(expenses);
  }
  return (
    <div className="App">
      <Routes>
      {/* <NewData onAddData={addPortfolioData}/> */}
      {/* <Navbar/> */}
      <Route exact path='/LandingPage' element={<LandingPage/>}></Route> 
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/portfolioheader' element={<NewData onAddData={addPortfolioData}/>}></Route>
      <Route path='/theme' component={<Theme/>}></Route>
      <Route path='/portcomposition' element={<PortComposition/>}></Route>
      <Route exact path='/portheader' element={<PortHeader/>}></Route>
    </Routes>

    </div>
  );
}

export default App;





{/*  
      <Add/>
      <Try/>
      <PortComposition/>
      <PortHeader/>
      <Theme/> */}