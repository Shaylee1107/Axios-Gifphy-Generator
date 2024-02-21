console.log("Let's get this party started!");

async function logIn(url){
    console.log('logIn start')
    // const res = await axios.post('http://upload.giphy.com/v1/gifs', { 
    //     param : 
    //     {api_key: "nXxcwEd9rDgAdXDeVZ3zlITkdvkSOOi5", 
    //     username: "ShayleeB", 
    //     source_image_url: url
    // }});
    const xhr = $.post("http://upload.giphy.com/v1/gifs", {api_key: "nXxcwEd9rDgAdXDeVZ3zlITkdvkSOOi5", username: "ShayleeB", source_image_url: url});
    xhr.done(function(data) { console.log("success got data", data); });

    // var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
    // xhr.done(function(data) { console.log("success got data", data); });
    // console.log('logIn() res value', res);
    makeImg(url);
}

async function getUrl(search){
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    console.log('getUrl() res.data', res.data);
    const firstGif = res.data.data[0].images.downsized.url;
    console.log('getUrl(): this is first gif', firstGif);
    logIn(firstGif);
}

function getInput(){
    const input = document.querySelector('#search');
    console.log('getInput() this is input value', input.value);
    getUrl(input.value);
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
