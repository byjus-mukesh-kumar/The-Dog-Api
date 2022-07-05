import './App.css';
import React, { Component } from 'react'
import Dogs from './Components/Dogs'
import Filter from './Components/Filter';
import Sort from './Components/Sort';


export default class App extends Component {

  render() {
    return (
      <div>
       <h2 style={{textAlign:"center"}}> welcome to Dog API</h2> 
       <Sort/>
       <Filter/>
       <Dogs/>
      </div>
    )
  }
}

