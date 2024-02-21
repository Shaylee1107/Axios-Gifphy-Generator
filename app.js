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
    console.log('search: ', input.value);
    getUrl(input.value);
    input.value = '';
}

async function getUrl(search){
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=nXxcwEd9rDgAdXDeVZ3zlITkdvkSOOi5`);
    const idxTotal = res.data.data.length;
    const randomIdx = Math.floor(Math.random() * idxTotal);
    const gif = res.data.data[randomIdx].images.downsized.url;
    console.log(res.data);
    makeImg(gif);
}

function makeImg(url) {
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    img.setAttribute('src', url);
    container.append(imgDiv);
    imgDiv.append(img);
    imgDiv.classList.add('imgDiv');
    img.classList.add('img');
}


