const jobApplication = [
    {
        id: 1,
        role: 'fashon designor',
        img: 'images/01  Fashion Designer Resume.jpg',
    },
    {
        id: 2,
        role: 'bookkeeper',
        img: 'images/02 Bookkeeper Resume.jpg',
    },
    {
        id: 3,
        role: 'chef',
        img: 'images/03 Chef Resume.jpg',
    },
    {
        id: 4,
        role: 'contractor',
        img: 'images/04 Contractor Resume.jpg',
    },
    {
        id: 5,
        role: 'nurse',
        img: 'images/05 Nurse Resume.jpg',
    }
]


let imgSrc = 0;
let roleData = jobApplication.map(value => value.role);
console.log(roleData);

let img = document.createElement( "img" );
img.src = jobApplication[imgSrc].img;
document.getElementById('resume').appendChild(img);


const next = document.getElementById("next");
next.addEventListener("click", myNext);

function myNext() {
    imgSrc += 1
    if(imgSrc < jobApplication.length){
        img.src = jobApplication[imgSrc].img;
    } else {
        imgSrc = 0;
        img.src = jobApplication[imgSrc].img;
    }  
}

const back = document.getElementById("back");
back.addEventListener("click", myBack);

function myBack() {
    imgSrc -= 1
    console.log(imgSrc);
    if(imgSrc > -1){
        img.src = jobApplication[imgSrc].img;
    } else {
        imgSrc = jobApplication.length-1;
        img.src = jobApplication[imgSrc].img;
    }  
}