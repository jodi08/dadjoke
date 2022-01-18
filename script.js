//bring in DOM elements
const btn = document.getElementById('btn');
const getAJoke = document.getElementById('joke');


//get a new joke
btn.addEventListener('click', getJoke);

//url to get dad joke
const url = "https://icanhazdadjoke.com/"

//async function
async function getJoke() {
  //headers
  const headerDetails = 
        {headers: {
          "Accept": "application/json",
          "User-Agent": "My Library (https://github.com/jodi08/dadjoke/https://icanhazdadjoke.com/"
        }
      }
  //await response

  let response = await fetch(url, 
  headerDetails)
  let data = await response.json();

  getAJoke.innerHTML = data.joke;
}
//call here so that it loads with a joke, so an empty div can't be copied.
getJoke()

function copyText() {
  
  // get the text field
  let copyJoke = getAJoke.innerHTML;
  
  
  //copy to clipboard

  navigator.clipboard.writeText(copyJoke)
    .then(() => alert("Joke copied!"))
    .catch((error) => alert("Copy failed"))
}
