import React, { Component } from 'react'

export default class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "Random" };
    
         this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      //   handleChange(event) {
      //     this.setState({ value: event.target.value });
      //   }
    
      handleSubmit(event) {
        alert("You choosed: " + this.state.value);
        event.preventDefault();
      }
    
      handleChange = event => {
        this.setState({ value: event.target.value });
      };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          Sorting :
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Random">Random</option>
            <option value="Asc">Asc</option>
            <option value="Desc">Desc</option>
            
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    )
  }
}
