//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const choice = document.querySelector('input').value.split(' ').join('+')
    console.log(choice)
    const url = "https://api.giphy.com/v1/gifs/search?api_key=cDHLAYdG5rExJkjmVa1Is0m59bOZTsk8&limit=1&rating=pg13&q=" + choice
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            console.log(data.data[0].bitly_url)
            document.querySelector('img').style.visibility = 'visible'
            document.querySelector('img').src = data.data[0].images.original.url

        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}