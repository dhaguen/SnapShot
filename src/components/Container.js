import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";

import { SETTINGS_NB_IMAGES_PER_PAGE } from "./Settings";

const Container = ({ searchTerm }) => {
  const { images, loading, runSearch } = useContext(PhotoContext);

  useEffect(() => {

    runSearch(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm,SETTINGS_NB_IMAGES_PER_PAGE]);

  return (
    <div className="photo-container">
      {loading ? <Loader /> : <Gallery data={images} />}
    </div>
  );
};

export default Container;
