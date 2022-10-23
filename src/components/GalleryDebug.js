import React from "react";
import NoImages from "./NoImages";

const GalleryDebug = props => {

const results = props.extraInfos;
let noImages;
let infos;

// map variables to each item in fetched image array and return image component
if (results.length > 0) {

  infos = results.map(info => {

    let id = info.photo.id;
    let title = info.photo.title;
    let width  = info.smallImgWidth;
    let height = info.smallImgHeight;
  
    return (
      <div>
        <li>
          <p>{title.substring(0,12)} ({id})</p>
          <p>w={width} h= {height}</p>
        </li>
      </div>
    )
  });
} else {
  noImages = <NoImages />; // return 'not found' component if no images fetched
}
return (
  <div>
    <ul>{infos}</ul>
    {noImages}
  </div>
)  

};


export default GalleryDebug;
