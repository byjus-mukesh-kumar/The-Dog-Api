import React, { Component } from 'react'
import DogImg from './DogImg';

export default class Dogs extends Component {

constructor()
  {
    super();
    this.state={
      dog:[],
      load:false,
      breed:[]
    }
    /*useEffect( ()=>{
      const headers={
        "x-api-key" : "fbe3f421-26e0-422d-b235-1da187356f22"

      }
    })*/
  }
  

  async componentDidMount() {
    let url = `https://api.thedogapi.com/v1/breeds?limit&page=0&order=random`;
   // let url='https://api.thecatapi.com/v1/images/search'
    this.setState({load:true})
    let data = await fetch(url);
    //let data=await fetch(url,Header:{'x-api-key':'fbe3f421-26e0-422d-b235-1da187356f22'})

    let parsedData = await data.json();
    //console.log(parsedData)
    this.setState({load:false})
    this.setState({ dog: parsedData });
    
  }
  handlePreClick=async()=>{
    let url = `https://api.thedogapi.com/v1/breeds?limit&page=${this.state.page}&order=Asc`;
    let data = await fetch(url);
    let parsedData = await data.json();
    
    this.setState({ 
      page:this.state.page-1,
      dog: parsedData });
    

  }
  handleNextClick=async()=>{
    let url = `https://api.thedogapi.com/v1/breeds?limit&page=0&order=Asc`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ 
      page:this.state.page+1,
      dog: parsedData ,
    breed:parsedData.name});
    

    //console.log(dog);

  }
 /*
  render() {
    return (
      <div className='container'>
          
          {
            this.state.dog.map((element)=>{
                return (
                <DogImg name={element.name?element.name:" "} breed_group={element.breed_group?element.breed_group:" "}
                imageUrl={element.image.url} />
                )
             }
            )
          } 
          <div>
          <button type="button" className="dark" onClick={this.handlePreClick}>&larr;Previous</button>
          <button type="button" className="dark" onClick={this.handleNextClick}>Next&rarr;</button>
          </div>
          </div>
          
    )
  }*/
  
  render() {
    return (
      <div className='container '>
          <h2>Dogs API</h2>

          <div className='row'>
          {
            this.state.dog.map((element)=>{
                return (
                
                <DogImg name={element.name?element.name:" "} breed_group={element.breed_group?element.breed_group:" "}
                imageUrl={element.image.url} />
               
                )
             }
            )
          } 
          </div>
          <div>
          <button type="button" className="btn btn-dark">Previous</button>
          <button type="button" className="btn btn-dark">Next</button>

      </div>
      </div>
    )
  }
}
