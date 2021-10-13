import React from 'react';
import CardList from './CardList';
import {robots} from './robots'

function App(){
  return(
    <div className="tc ma3">
      <div className="pa2"> 
        <h1>Robofriends</h1>
        <input className="pa3" type="text" placeholder="Search" /> 

      </div>
     
      <CardList robots={robots} />
    </div>
      
  )
}










export default App;