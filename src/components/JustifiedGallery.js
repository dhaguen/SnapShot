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
          maxWidth : '80%',
          maxHeight : '80%',
          opacity : 1.0,
          transition : 'elastic',
          current : ''
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
