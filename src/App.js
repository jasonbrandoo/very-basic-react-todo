import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
      list: []
    };
  }

  inputHandler = (e) => {
    this.setState({newItem: e.target.value});
  }

  addItem = () => {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem
    }
    const list = this.state.list;
    list.push(newItem);
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem = (id) => {
    const list = this.state.list;
    const deletedList = list.filter(item => item.id !== id);
    this.setState({list: deletedList});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React To Do</h1>
        </header>
        <p className="App-intro">Add item to the list</p>
        <input
          type="text"
          placeholder="Type item here"
          value={this.state.newItem}
          onChange={this.inputHandler.bind(this)}
        />
        <button 
        onClick={this.addItem}
        disabled={!this.state.newItem.length}
        >
        Add
        </button>
        <ul>
        {this.state.list.map(item => {
          return (
            <li key={item.id}>
            {item.value}
            <br/>
            <button onClick={() => this.deleteItem(item.id)}>Delete</button>
            </li>
            )
        })}
        </ul>
      </div>
    );
  }
}

export default App;
