import axios from "axios";
import { apiKey } from "../src/api/config.js";

const TEST_QUERY_NB_IMAGES = 10;
const TEST_QUERY_SEARCH_STRING = 'bird'

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


/* const getRequest = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts/1";

  let output = undefined;

  console.log("getRequest : DEBUG ")

  await axios
    .get(url)
    .then((response) => {
      console.log("axios then = ", response.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() => {
      console.log("THEN : all others cases.")
    })
    ;
}; */

/* test('debug test', async () => {

  const response = await getRequest();
  console.log("test response = ", response);
}); */


