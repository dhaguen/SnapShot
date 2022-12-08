import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import JustifiedGallery from "./JustifiedGallery";
import InfiniteScroll from 'react-infinite-scroll-component';

const Container = ({ searchTerm }) => {

  const { images, loading, imageExtraInfos, runSearch, runInfo, page, setPage} = useContext(PhotoContext);

  const fetchData = () => {    
    setPage(page + 1);
  };
  
  useEffect(() => {
    runSearch(searchTerm, 'scroll-infinite');
    // eslint-disable-next-line

  }, [page,searchTerm]);

  const infiniteScroll = parseInt(sessionStorage.getItem('infiniteScroll') || 1);

  if (infiniteScroll === 1) {
    return (
      <InfiniteScroll
        dataLength={images.length * page}
        next={fetchData}
        scrollThreshold={0.95}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>}
      >
        <JustifiedGallery>
          <Gallery data={images} />
        </JustifiedGallery>
      </InfiniteScroll>
    )
  }
  else {
    return (
      <JustifiedGallery>
        <Gallery data={images} />
      </JustifiedGallery>
    )
  }
};

export default Container;
