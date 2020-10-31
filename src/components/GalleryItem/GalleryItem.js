import React, { Component } from 'react';
import './GalleryItem.css';
import axios from 'axios';

class GalleryItem extends Component {
  state = {
    flip: false,
  };

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
    console.log(this.state.flip);
  };

  putLike = (event) => {
    axios({
      method: 'PUT',
      url: '/gallery/like/' + this.props.item.id,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    let galleryItem = (
      <img src={this.props.item.path} alt={this.props.item.description}></img>
    );

    let likeCount = <p>No one loves this ;(</p>;

    if (this.state.flip === true) {
      galleryItem = (
        <p className="description">{this.props.item.description}</p>
      );
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
