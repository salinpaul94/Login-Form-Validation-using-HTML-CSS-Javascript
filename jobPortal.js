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

// document.getElementById("previous").innerHTML = "";
let imgSrc = 0;

let img = document.createElement( "img" );
img.src = jobApplication[imgSrc].img;
document.getElementById('resume').appendChild(img);




const next = document.getElementById("next");
next.addEventListener("click", myNext);

function myNext() {
    imgSrc += 1
    if(imgSrc < jobApplication.length){
        img.src = jobApplication[imgSrc].img;
        loadPrevious();
    }
    if(imgSrc === jobApplication.length-1){
        document.getElementById("next").innerHTML = "";
    } 
}


if(imgSrc === 0) {
    document.getElementById("previous").innerHTML = "";
}
function loadPrevious() {
    if(imgSrc > 0){
        document.getElementById("previous").innerHTML = "<button class='button' id='back'>Previous</button>";
        const back = document.getElementById("back");
        back.addEventListener("click", myBack);
    }
}



function myBack() {
    imgSrc -= 1
    console.log(imgSrc);
    if(imgSrc > -1){
        img.src = jobApplication[imgSrc].img;
        document.getElementById("next").innerHTML = "<button class='button' id='next'>Next</button>";
        if(imgSrc === 0) {
            document.getElementById("previous").innerHTML = "";
        }
    }
}

var roleData = jobApplication.map(value => value.role.toUpperCase());
console.log(roleData);

// var keys=document.getElementById('key').value.toUpperCase();

// function searchFun() {
//     for(let i=0; i<roleData.length; i++){
//         if(roleData[i].indexOf(keys) > -1) {
//             console.log("hi");
//             // document.write(keys.value + " <b>Not Found</b>");
//         }
//     }  
// }