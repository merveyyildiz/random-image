const root = document.querySelector('#root');
function createImage(url){
    const image = document.createElement('img');
    image.setAttribute('src',`${url}`);
    root.appendChild(image);
};

function getRandomCatImage(){
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(data => createImage(data[0].url))
    .catch(err => console.log(err));
}

function getRandomDogImage(){
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then( res1 => res1.json())
   .then(data1 => createImage(data1.message))
    .catch(err => console.log( err));
}

getRandomDogImage();
getRandomCatImage();