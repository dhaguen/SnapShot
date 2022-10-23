import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import GalleryDebug from "./GalleryDebug";
import Loader from "./Loader";

import { SETTINGS_NB_IMAGES_PER_PAGE } from "./Settings";
import { GALLERY_DEBUG_MODE } from "./Settings";

const Container = ({ searchTerm }) => {

  const { images, loading, imageExtraInfos, runSearch, runInfo } = useContext(PhotoContext);

  useEffect(() => {

    runSearch(searchTerm);
    // eslint-disable-next-line

  }, [searchTerm, SETTINGS_NB_IMAGES_PER_PAGE]);

  useEffect(() => {

    runInfo(images);
  }, [images]);

  return (
    <div className="photo-container">
      {loading ? <Loader /> :
        GALLERY_DEBUG_MODE ? <GalleryDebug data={images} extraInfos={imageExtraInfos} /> :
          <Gallery data={images} />}
    </div>
  );
};

export default Container;
