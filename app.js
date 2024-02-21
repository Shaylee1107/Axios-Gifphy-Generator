console.log("Let's get this party started!");

async function logIn(){
    const res = await axios.post('http://upload.giphy.com/v1/gifs', { 
        param : 
        {api_key: "nXxcwEd9rDgAdXDeVZ3zlITkdvkSOOi5", 
        username: "ShayleeB", 
        source_image_url: "http://www.mysite.com/myfile.mp4"
    }});
    return res; 
}

async function getGif(search){
    logIn();
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    console.log(res.data);
    const firstGif = res.data.data[0].url;
    console.log('this is first gif', firstGif);
    makeImg(firstGif);
}

function getInput(){
    const input = document.querySelector('#search');
    console.log(input.value);
    getGif(input.value);
}

function makeImg(url) {
    console.log('this is url', url);
    const container = document.querySelector('#container');
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    img.setAttribute('src', url);
    container.append(imgDiv);
    imgDiv.append(img);
}

// getInfo()
