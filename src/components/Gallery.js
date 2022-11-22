import React from "react";
import NoImages from "./NoImages";

const Gallery = props => {
  const results = props.data;
  let images;
  let noImages;
  // map variables to each item in fetched image array and return image component
  if (results.length > 0) {
    images = results.map(image => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let small_image_url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_n.jpg`;
      let large_image_url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_b.jpg`;
      //https://www.flickr.com/services/api/flickr.photos.getSizes.html

      return (
        <a href={large_image_url}>
          <img alt={title} src={small_image_url} />
        </a>
      );
    });

  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  
  return (
    <div id ="myGallery">
      {images}
    </div>
  );
};

export default Gallery;
