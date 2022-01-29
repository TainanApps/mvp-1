let body = document.querySelector('body')
let title = document.querySelector('#title')
let img = document.querySelector('img')

const changeColor = (event) => {
    body.style.backgroundColor = event.target.dataset.color;
    title.style.color = 'white';
};

const changeImg = (event) => {
    img.src = event.target.dataset.src;
};
