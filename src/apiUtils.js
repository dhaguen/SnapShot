import axios from "axios";
import { apiKey } from "../src/api/config.js";

async function getImageSizes(photoId, labelImageSize) {

  let sizes;
  let smallImgWidth, smallImgHeight;

  await axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${apiKey}&photo_id=${photoId}&format=json`
    )
    .then(response => {
      sizes = response.data;
      sizes = sizes.substring(14).slice(0, -1); // remove the jsonFlickrApi(...) decoration
      var jsonParsedArray = JSON.parse(sizes);

      for (var i = 0; i < jsonParsedArray.sizes.size.length; i++) {

        var oneSize = jsonParsedArray.sizes.size[i];
        if (oneSize.label === labelImageSize) {
          smallImgWidth = oneSize.width;
          smallImgHeight = oneSize.height;
          break;
        }
      }
    })
    .catch(error => {
      console.log(
        "Encountered an error with fetching and parsing data",
        error
      );
    });

  return [smallImgWidth, smallImgHeight];
}

async function getMultiImageSizes(photoIdArray, labelImageSize) {

  let smallImgWidth, smallImgHeight;
  let withHeightArray = [];

  for (let photoId of photoIdArray)
  {
    const [w, h] = await getImageSizes(photoId, labelImageSize);
    let smallImgWidth  = typeof w != 'undefined' ? w : 0;
    let smallImgHeight = typeof h != 'undefined' ? h : 0;

    if (smallImgWidth != 0 && smallImgHeight !=0)
    {
      withHeightArray.push({'width':smallImgWidth, 'height': smallImgHeight});
    }
  }

  return withHeightArray;
}

export { getImageSizes, getMultiImageSizes };