import axios from "axios";
import { apiKey } from "../src/api/config.js";
import {getImageSizes, getMultiImageSizes} from "./apiUtils.js";

const TEST_QUERY_NB_IMAGES = 10;
const TEST_QUERY_SEARCH_STRING = 'bird';
const TEST_QUERY_ONE_PHOTO_ID = 52440310112;
const TEST_QUERY_THREE_PHOTO_ID = [52410896747,52437820843,52436189999];


async function runSearch(query) {

  let images = [];

  await axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=${TEST_QUERY_NB_IMAGES}&format=json&nojsoncallback=1`
    )
    .then(response => {

      images = response.data.photos.photo;
      console.log(".then : images = ", images)
    })
    .catch(error => {
      console.log(
        "Encountered an error with fetching and parsing data",
        error
      );
    });

    return images;
}
  
test('API query : 10images must be return', async() => {

  const data = await runSearch(TEST_QUERY_SEARCH_STRING);

  expect(data.length).toBe(TEST_QUERY_NB_IMAGES);
});

test('API query : Small image fetch width must not be 0', async() => {

  const [w, h] = await getImageSizes(TEST_QUERY_ONE_PHOTO_ID, 'Small');

  let smallImgWidth  = typeof w != 'undefined' ? w : 0;
  let smallImgHeight = typeof h != 'undefined' ? h : 0;

  expect(smallImgWidth).not.toBe(0);
});

test('API query : must be able to query several with from image in a row', async() => {

  const withHeightArray = await getMultiImageSizes(TEST_QUERY_THREE_PHOTO_ID, 'Small');

  expect(withHeightArray.length).toBe(TEST_QUERY_THREE_PHOTO_ID.length);

});