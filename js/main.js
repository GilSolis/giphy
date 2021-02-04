//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const choice = document.querySelector('input').value.split(' ').join('+')
    console.log(choice)
    const url = 'http://api.giphy.com/v1/gifs/search?q=' + choice + '&api_key=cDHLAYdG5rExJkjmVa1Is0m59bOZTsk8'
    const url2 = "https://api.tenor.com/v1/search?q=excited&key=LIVDSRZULELA&limit=8"

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            console.log(data.data[0].bitly_url)
            // console.log(data.data[0].url)
            // document.querySelector('link').href = data.data[0].url
            // document.querySelector('iframe').src = data.data[0].url + '/giphy.gif'
            // document.querySelector('iframe').src = data.data[0].bitly_url
            // document.querySelector('iframe').style.height = "80vh"
            document.querySelector('img').style.visibility = 'visible'
            document.querySelector('img').src = 'https://media.giphy.com/media/' + data.data[0].id + '/giphy.gif'

        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}