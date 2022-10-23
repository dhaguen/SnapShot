import React, { createContext, useState } from "react";
import axios from "axios";
import { apiKey } from "../api/config";
import { SETTINGS_NB_IMAGES_PER_PAGE } from "../components/Settings";
import { getMultiImageSizes } from "../apiUtils";


export const PhotoContext = createContext();

const PhotoContextProvider = props => {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageExtraInfos, setImageExtraInfos] = useState([]);

  const runSearch = query => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=${SETTINGS_NB_IMAGES_PER_PAGE}&format=json&nojsoncallback=1`
      )
      .then(response => {
        setImages(response.data.photos.photo);
        setLoading(false);
      })
      .catch(error => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  };
  
  const runInfo = async images => {
    
    let photoIds = images.map(image => image.id);

    const withHeightArray = await getMultiImageSizes(photoIds, 'Small');

    let infos = [];

    if (images.length === withHeightArray.length)
    {
      for (let i = 0; i < images.length; i++) {
        infos.push({'photo':images[i], 'smallImgWidth':withHeightArray[i].width, 'smallImgHeight':withHeightArray[i].height });
      }
    }
    
    if (infos.length > 0) {
      setImageExtraInfos(infos);
    }
  };

  return (
    <PhotoContext.Provider value={{ images, loading, imageExtraInfos, runSearch, runInfo }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
