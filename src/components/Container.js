import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import JustifiedGallery from "./JustifiedGallery";

import { SETTINGS_NB_IMAGES_PER_PAGE } from "./Settings";

const Container = ({ searchTerm }) => {

  const { images, loading, imageExtraInfos, runSearch, runInfo } = useContext(PhotoContext);

  useEffect(() => {

    runSearch(searchTerm);
    // eslint-disable-next-line

  }, [searchTerm, SETTINGS_NB_IMAGES_PER_PAGE]);

  return (
    <JustifiedGallery>
      <Gallery data={images} />
    </JustifiedGallery>
  );
};

export default Container;
