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
    }).on('jg.complete', function () {
      $("#myGallery").find('a').colorbox({
          maxWidth : '90%',
          maxHeight : '90%',
          opacity : 1.0,
          transition : 'fade',
          speed: 400,
          rel : "group"
      });
  });  
  
  });

  return (
    <div>
      {props.children}
    </div>
  );
};

export default JustifiedGallery;
