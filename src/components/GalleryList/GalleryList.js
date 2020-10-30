import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

//Renders the Gallery list
class GalleryList extends Component {
  render() {
    return (
      <div>
        <p>Gallery goes here</p>
        {this.props.gallery.map((item, index) => {
          return <GalleryItem key={item.id} item={item} />;
        })}
      </div>
    );
  }
}

export default GalleryList;
