import React, {useEffect } from "react";

import "justifiedGallery/dist/css/justifiedGallery.css"
import "justifiedGallery/dist/js/jquery.justifiedGallery.js"
import $ from "jquery";

const JustifiedGallery = (props) => {

  useEffect(() => {

    $("#myGallery").justifiedGallery({
      rowHeight: 180,
      lastRow: 'nojustify',
      margins: 8,      
    });  
  
  });

  return (
    <div>
      {props.children}
    </div>
  );
};

export default JustifiedGallery;
