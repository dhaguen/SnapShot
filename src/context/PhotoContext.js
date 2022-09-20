import React, { createContext, useState } from "react";
import axios from "axios";
import { apiKey } from "../api/config";

import { SETTINGS_NB_IMAGES_PER_PAGE } from "../components/Settings";


export const PhotoContext = createContext();

const PhotoContextProvider = props => {

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
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
  return (
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
