import React, { Component } from 'react';
import './DogImg.css'
export default class DogImg extends Component {
  
   /*
  render() {
    let {imageUrl}=this.props;
    return (
      <div className="container">
        <img style={{width:300 ,height:300}} src={imageUrl} alt="..."/>
        <h5>{name}</h5>
      </div>
    )
  }*/
  render() {
    let {name,imageUrl}=this.props;
     //console.log(breed_group)

return (
  <div className="card">
  <div className="image">
   <img style={{width:300,height:300}}src={imageUrl} alt=""/>
  </div>
 <div className="title">
     <h1>{name}</h1>
 </div>

</div>
)
}
}
