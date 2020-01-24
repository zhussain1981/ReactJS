import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';


class  App extends React.Component {
  
  render(){
    var Message = 'Mastering RecatJS';

  return (
    <div className="App">
      <h1>{Message}</h1>
    </div>
  );

  }//end of render
}//end of class

export default App;
