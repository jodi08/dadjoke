const btn = document.getElementById('btn');
const getAJoke = document.getElementById('joke')

const url = "https://icanhazdadjoke.com/"
btn.addEventListener('click', getJoke)

// getJoke()

async function getJoke() {
  const headerDetails = 
        {headers: {
          "Accept": "application/json"
        }
      }
  
  let response = await fetch(url, 
  headerDetails)
  let data = await response.json()

  getAJoke.innerHTML = data.joke

}

  
