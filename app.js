console.log("Let's get this party started!");

async function getInfo(){
    const form = document.querySelector('#form');
    const input = document.querySelector('#search');

    const res = await axios.get('http://api.giphy.com/v1/gifs/search?q=dog&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym');
    console.log(res.data);
    const firstGif = res.data.data[0].url;
    console.log('this is first gif', firstGif);


}

getInfo()
