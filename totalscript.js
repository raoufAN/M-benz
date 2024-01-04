let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () =>{
    navbar.classList.toggle('active')
    searchfrom.classList.remove('active')
    cartitem.classList.remove('active')
}

let searchfrom = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () =>{
    searchfrom.classList.toggle('active')
    navbar.classList.remove('active')
    cartitem.classList.remove('active')
}



let cartitem = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () =>{
    cartitem.classList.toggle('active')
    navbar.classList.remove('active')
    searchfrom.classList.remove('active')
}


window.onscroll = () =>{
    navbar.classList.remove('active')
    searchfrom.classList.remove('active')
    cartitem.classList.remove('active')
}


// image slider scripte

var lesImages = document.querySelectorAll('.slider-container img');
var arrayImages = Array.from(lesImages);
var sliderlength = arrayImages.length;
var currentslider = 1;


var slideNumber = document.getElementById('slider-number');

var prevbutton = document.getElementById('prev');
prevbutton.onclick = prevbuttonfunction;
var nextbutton = document.getElementById('next');
nextbutton.onclick = nextbuttonfunction;

var ListUL = document.createElement("ul");
ListUL.setAttribute('id',"pagination-ul");

for (let i = 1; i <= sliderlength; i++) {
    var listLI = document.createElement('li');
    listLI.appendChild(document.createTextNode(i))
    listLI.setAttribute('data-index', i)

    ListUL.appendChild(listLI)
    
}

document.querySelector(".indecators").appendChild(ListUL)

var arrayofLI = Array.from(document.querySelectorAll('ul li'));

for (let i = 0; i < arrayofLI.length; i++) {
    arrayofLI[i].onclick = function () {
        currentslider = parseInt(this.getAttribute('data-index'))
        global()
    }
    
}
global()


function prevbuttonfunction() {
    if (prevbutton.classList.contains('disabled')) {
        console.log(`'limite of prev is 5' is ${currentslider}`)
    } else {
        currentslider--;
        console.log(`courent slider is ytana9s ma3a kol prev ${currentslider}`);
        global()
}
}

function nextbuttonfunction() {
    if (nextbutton.classList.contains('disabled')) {
        console.log(`'limite of next is 5' is ${currentslider}`)
        return false
    } else {
        currentslider++;
        console.log(`courent slider is ytazayd ma3a kol next ${currentslider}`);
        global()  
    }
    
}


function global(){
    slideNumber.textContent = "slide N#0" + (currentslider) + " of " +(sliderlength);
    
    removeallactive()
    
    arrayImages[currentslider - 1].classList.add('active');

    ListUL.children[currentslider - 1].classList.add('active');

    if (currentslider == 1) {
        prevbutton.classList.add("disabled")
    } else {
        prevbutton.classList.remove("disabled")
    }

    if (currentslider == sliderlength) {
        nextbutton.classList.add("disabled")
    } else {
        nextbutton.classList.remove("disabled")
    }

    
    
}

function removeallactive(){
    arrayImages.forEach( (ele) => {
        ele.classList.remove('active')
    })

    arrayofLI.forEach( (ele) => {
        ele.classList.remove('active')
    })
}

// laod scroller program 

// scrollHeight : entire content & and padding (visible oe not)
// clientheight : visible content & padding li banlk fla page wch t9der tchof b3ynk

let ele = document.querySelector('.scroller');
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight ;


console.log(document.documentElement.scrollHeight);

console.log(document.documentElement.clientHeight);

console.log(height);

window.addEventListener("scroll" , () => {
    let scrolltop = document.documentElement.scrollTop ; // joz2 ali ant dertlo scoll  bgdah hbat
    console.log(scrolltop);

    ele.style.width = `${(scrolltop / height)*100}%`
})




