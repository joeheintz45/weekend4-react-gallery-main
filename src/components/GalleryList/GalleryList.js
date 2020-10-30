import React, { Component } from 'react';

class GalleryList extends Component {
  render() {
    return (
      <div>
        <p>Gallery goes here</p>
        {this.props.gallery.map((item) => {
          return <img src={item.path} />;
        })}
      </div>
    );
  }
}

export default GalleryList;
