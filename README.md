# React Image Gallery

## Description

I had to build a gallery of images with the ability to click the image to view the description. I also had to add a like button feature that actively updated the like count from the server array and render it on page. I started by adding a get route to the App.js to retrieve the data from the server and set the state of the gallery state to that data. I set the state of gallery in App.js to an empty array and pass that array to GalleryList.js through props. I then went to the GalleryList.js file and made a map function that iterated through the gallery array prop to render each image. In GalleryItem.js I rendered each individual image using the item prop to get the gallery array data passed to the file. I also created a function that changed the flip state in GalleryItem.js to allow for clicking on the image and changing the render item to be the description of the picture. Finally, I added a like button that used a PUT route to update the like count on the server and rendered the count to the page on button click.

## Usage

- User will be able to view the images.
- User can then click on any image and have the image flip to the image description.
- User can also click the like button and increase the like count for each individual image.

## Built With

- HTML
- CSS
- JavaScript
- React

## Acknowledgement

I'd like to thank Prime Digital Academy for supplying me with the knowledge and resources to build this project.
