// Fetch API - Browser API for HTTP (AJAX) Requests.
// Default - Get Requests, supports other methods as well.
// Returns Promise.

const url = "https://www.course-api.com/react-tours-project";

// console.log(fetch(url));

// Using .then and .catch method.
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Using async await.
const getTours = async () => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getTours();