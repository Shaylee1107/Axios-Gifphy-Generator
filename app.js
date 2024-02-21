console.log("Let's get this party started!");

const btn = document.querySelector('#btn');
const rmvBtn = document.querySelector('#rmv-btn');
const container = document.querySelector('#container');

btn.addEventListener('click', getInput);

rmvBtn.addEventListener('click', function(e){
    e.preventDefault();
    container.innerHTML = '';
})

function getInput(e){
    e.preventDefault();
    const input = document.querySelector('#search');
    console.log('getInput() this is input value', input.value);
    getUrl(input.value);
    input.value = '';
}

async function getUrl(search){
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=nXxcwEd9rDgAdXDeVZ3zlITkdvkSOOi5`);
    console.log('getUrl() res.data', res.data);
    const firstGif = res.data.data[0].images.downsized.url;
    console.log('getUrl(): this is first gif', firstGif);
    makeImg(firstGif);
}

function makeImg(url) {
    console.log('this is url', url);
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    img.setAttribute('src', url);
    container.append(imgDiv);
    imgDiv.append(img);
}


