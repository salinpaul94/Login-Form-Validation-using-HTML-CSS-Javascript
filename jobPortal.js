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
        id: 1,
        role: 'chef',
        img: 'images/03 Chef Resume.jpg',
    },
    {
        id: 1,
        role: 'contractor',
        img: 'images/04 Contractor Resume.jpg',
    },
    {
        id: 1,
        role: 'nurse',
        img: 'images/05 Nurse Resume.jpg',
    }
]



let roleData = jobApplication.map(value => value.role);
console.log(roleData);

let img = document.createElement( "img" );
img.src = "images/01  Fashion Designer Resume.jpg";

document.getElementById('resume').appendChild(img);