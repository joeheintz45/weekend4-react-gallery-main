import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

//Renders the Gallery list
class GalleryList extends Component {
  render() {
    return (
      <div>
        <p>Gallery goes here</p>
        {/* iterates through the array and returns each GalleryItem component */}
        {this.props.gallery.map((item, index) => {
          return (
            <GalleryItem
              key={item.id}
              item={item}
              getCall={this.props.getCall}
            />
          );
        })}
      </div>
    );
  }
}

export default GalleryList;
