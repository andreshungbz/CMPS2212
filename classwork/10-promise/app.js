fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error('Fetch error:', error));

fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then((response) => {
    if (!response.ok) {
      throw new Error('NASA API request failed');
    }
    return response.json();
  })
  .then((data) => {
    console.log('NASA APOD data:', data);
  })
  .catch((error) => console.error('Error fecthing NASA APOD:', error));
