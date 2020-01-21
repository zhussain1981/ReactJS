import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { tsExpressionWithTypeArguments } from '@babel/types';

const list = [
  {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },
  {
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
  },
  ];

  export default class App extends Component {
    constructor(props){
      super(props);

      this.state = {
        list,
      };

      this.onDismiss = this.onDismiss.bind(this);
      this.onAdd = this.onAdd.bind(this);
    }

    onDismiss(id){
        const removeitem = item => item.objectID !== id;
        const updatedlist = this.state.list.filter(removeitem)
        this.setState({list:updatedlist});
    }

    onAdd(id){
      //const removeitem = item => item.objectID !== id;
      this.state.list.push(id);
       //const updatedlist = this.state.list.filter(removeitem)
     // this.setState({list:updatedlist});
  }

    render() {
    return (
    <>
    <div className="App">
    {this.state.list.map(y
      item =>
    <div key={item.objectID}>
    <span>
    <a href={item.url}>{item.title}</a>
    </span><br />
    <span>{item.author}</span><br />
    <span>{item.num_comments}</span><br />
    <span>{item.points}</span><br />
    <span>
      <button onClick={() => this.onDismiss(item.objectID)} type="button"> Dismiss </button>
    </span>
    </div>
    )}
    </div>
    <br />
    <div className="App">
    {this.state.list.map(item => {
    const onHandleDismiss = () =>
    this.onDismiss(item.objectID);
  
    return (
    <div key={item.objectID}>
    <span>
    <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
    <span>
    <button
    onClick={onHandleDismiss}
    type="button"
    >
    Dismiss
    </button>
    </span>
      <span><input type="text" id="txt"></input> </span>
    <span><button onClick={() => this.onAdd(document.getElementById('txt').value)} type="button"> Add </button></span>
    </div>
    );
    }
    )}
    </div>
    </span>
     );
    }
  }