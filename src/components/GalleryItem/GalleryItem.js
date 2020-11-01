import React, { Component } from 'react';
import './GalleryItem.css';
import axios from 'axios';

// the gallery image or description component and like button with functionality
class GalleryItem extends Component {
  // sets the state of flip to false by default
  state = {
    flip: false,
  };

  // function for handling the img click to switch to the description box
  handleClick = (event) => {
    if (this.state.flip === false) {
      this.setState({
        flip: true,
      });
    } else if (this.state.flip === true) {
      this.setState({
        flip: false,
      });
    }
  }; // end handleClick

  // put function for updating the images like count on the server
  putLike = (event) => {
    event.preventDefault();
    axios({
      method: 'PUT',
      url: '/gallery/like/' + this.props.item.id,
    })
      .then((response) => {
        this.props.getCall();
      })
      .catch((err) => {
        console.log(err);
      });
  }; // end putLike function

  // render the individual img
  render() {
    // sets the img to a variable for conditional rendering
    let galleryItem = (
      <img src={this.props.item.path} alt={this.props.item.description}></img>
    );
    // checks the state of the flip key and changes it based on its current state
    if (this.state.flip === true) {
      galleryItem = (
        <p className="description">{this.props.item.description}</p>
      );
    }

    // sets the like count message to a default message
    let likeCount = <p>No one loves this ;(</p>;
    // updates the like count message after the first click
    if (this.props.item.likes > 0) {
      likeCount = <p>{this.props.item.likes} people love this!</p>;
    }

    return (
      <div className="container">
        <div onClick={this.handleClick}>{galleryItem}</div>
        <div>
          <button onClick={this.putLike}>Love It!</button>
          {likeCount}
        </div>
      </div>
    );
  }
}

export default GalleryItem;
