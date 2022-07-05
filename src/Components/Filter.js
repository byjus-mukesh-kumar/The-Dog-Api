import React, { Component } from 'react'

export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = { value: "Affenpinscher" };
    
         this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      //   handleChange(event) {
      //     this.setState({ value: event.target.value });
      //   }
    
      handleSubmit(event) {
        alert("You Choosed: " + this.state.value);
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
          Filtering:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Afghan Hound">Afghan Hound</option>
            <option value="Akita">Akita</option>
            <option value="Barbet">Barbet</option>
            <option value="basenji">basenji</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    )
  }
}
