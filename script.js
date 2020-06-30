console.log(window.innerHeight, window.innerWidth)
var home = document.querySelector('#home');
//let vh = window.innerHeight/100;
//let vw = window.innerWidth/100;
// //console.log(home)
// let i = true;
// console.log(i);
// home.addEventListener('click', (i) => {
//     while(i == true){
//     window.scrollBy(0, 150);
//     }
//     i = false;
//     //console.log(window.scrollY);
// })
//i = false;
//console.log(i)
let first_time=true
function inputRenderer(value) {
    let flexOuter= document.querySelector('.flex-outer')
    let prevInputs = [...document.getElementsByClassName('member-name-username'), ...document.getElementsByClassName('member-phone-email')]
    console.log(prevInputs)
    if(prevInputs) {
        prevInputs.map(input => {
            //console.log(input)
            flexOuter.removeChild(input)
        })
    }
    for(let i=1; i<=value; ++i) {
        flexOuter.innerHTML+=`<ul class="flex-inner member-name-username">
        <li class="input-1">
            <input type="text" class="myInput member-name " placeholder="name member ${i}">
        </li>
        <li class="input-2">
            <input type="text" class="myInput member-username" placeholder="username member ${i}">
        </li>
    </ul>`
    }
    for(let i=1; i<=value; ++i) {
        flexOuter.innerHTML+=`<ul class="flex-inner member-phone-email">
        <li class="input-1">
            <input type="number" class="myInput member-phone " placeholder="phone no of member ${i}">
        </li>
        <li class="input-2">
            <input type="email" class="myInput member-email" placeholder="email member ${i}">
        </li>
    </ul>`
    }
    
}

function func(id) {
    if(window.innerWidth>=500)
        return
    if(id==='navbar')
        return
    sidebarClose();
}

window.onscroll = function(e) {
    //console.log("hi");
    hidenav()
    //console.log(window.pageYOffset);
    let scrolldown = window.pageYOffset;
    //console.log(scrolldown)
    let cenimg = document.querySelector('#center-img');
    let leftimg = document.querySelector('#left-img');
    let rightimg = document.querySelector('#right-img');
    let arma = document.querySelector('#logo');
    if(scrolldown <= 150 && window.innerWidth > 500) {
        cenimg.style.height = "87vh";
        cenimg.style.transform = `scale(${1- (scrolldown*0.00085)}, ${1 - (scrolldown*0.00085)})`;
        rightimg.style.transform = `translate(${(3.5/200 * scrolldown) - 8.0}vw)`;
        leftimg.style.transform = `translate(${(-3.5/200 * scrolldown) + 13.0}vw)`;
        arma.style.bottom = `${70 + 0.4 * scrolldown}`;
        cenimg.style.zIndex = '2';
    }
    //first_time=false
}
let checker = true;

function sidebarOpen() {
    if(window.innerWidth>=500) {
        //console.log('return')
        return
    }
    document.getElementById('navbar').style.display = "flex";
}

function sidebarClose() {
    if(window.innerWidth>=500) {
      //  console.log('return')
        return
    }
    document.getElementById('navbar').style.display = "none"
}

function openAbout() {
    window.scrollTo({
        top: 0,
        left : 0,
        behavior: "smooth"
    })
    //console.log(document.getElementById('about-cont'))
    document.getElementById('about-cont').style.display = "flex"
    document.getElementById('home-images').style.display="none"
    document.getElementById('games-page').style.display="none"
    document.querySelector('.form-cont').style.display='none'
}
function closeAbout(href) {
    document.getElementById('about-cont').style.display = "none"
    document.getElementById('home-images').style.display="block"
    document.getElementById('games-page').style.display="flex"
    document.querySelector('.form-cont').style.display="none"
    window.location.href = href
}

function openRegister() {
    //console.log(document.querySelector('.form-cont'))
    window.scrollTo({
        top: 0,
        left : 0,
        behavior: "smooth"
    })
    //console.log(document.querySelector('#navbar').style)
    document.querySelector('.form-cont').style.display = "block"
    document.getElementById('about-cont').style.display = "none"
    document.getElementById('home-images').style.display="none"
    document.getElementById('games-page').style.display="none"

}

function scroller(checker){
    
    if (window.pageYOffset < 175)
    {
        //first_time=true
        var x = 20;
        var y = 60;
        var count=0
        //console.log(first_time)
        var myvar=setInterval(function() {
            if(window.pageYOffset >=0&&checker) {
            //count++
            //console.log(window.pageYOffset)
            //console.log(count)
            if(window.pageYOffset<=200) {
            //console.log('hi')
                window.scrollBy(0, x);
                
            }
            if(window.pageYOffset >=200){
                clearInterval(myvar)
            }
        }
        }, y)

        
        
        //console.log(window.pageYOffset);
    }
    //function()
    
    //console.log(window.pageYOffset);
}
var nav_height= (document.getElementById('right-nav').getBoundingClientRect().height/2)-20

var height_home=document.getElementById('home').getBoundingClientRect().height+2*document.getElementsByClassName('info')[0].getBoundingClientRect().height
function hidenav(){
    if(window.innerWidth<500)
        return;
    var info=document.getElementsByClassName('info')[0].getBoundingClientRect()
    //console.log(window.pageYOffset)
    var num=info.y+info.height-nav_height
    //console.log(info.y+info.height-nav_height)
    if(50<window.pageYOffset&&num>0){
        document.getElementById('left-nav').style.display='none'
        document.getElementById('right-nav').style.display='none'
        document.getElementById('navbar').style.backgroundColor = 'transparent';
        document.getElementById('navbar').style.transition = '0s'
    }
    
    else{
        
        document.getElementById('left-nav').style.display='flex'
        document.getElementById('right-nav').style.display='flex'
        document.getElementById('navbar').style.backgroundColor = '';
        document.getElementById('navbar').style.transition = '0.5s ease-in'
    }
}
let previous=4
function img_slide(input){
    
    //console.log(input);
    var ten_vh= 10+2*document.getElementsByClassName('name')[input].getBoundingClientRect().height
    //console.log(ten_vh)
    document.getElementsByClassName('game-img')[input].style.transform='translateY('+ten_vh+'px)'
    //console.log(document.getElementsByClassName('game-img')[input])
    
        //console.log(input)
        //console.log(previous)
            document.getElementsByClassName('game-name')[input].style.color='white'
            document.getElementsByClassName('rules-cont')[input].style.display='flex'
            document.getElementsByClassName('rules-cont')[input].style.marginTop='-10px'
            //document.querySelectorAll('.game-img')[input].style.transitionDelay = '.4s'
            document.querySelectorAll('.rules')[input].style.transitionDelay = '.1s'
        previous=input
        
    /*if(!first_time){
        var i=previous
        
        //console.log(i)
       
        document.getElementsByClassName('game-img')[i].style.transform=''
        document.getElementsByClassName('game-name')[i].style.color='transparent'
        document.getElementsByClassName('rules-cont')[i].style.display='none'
    }
    first_time=false*/
    
}
function img_slide1(input) {
    //console.log(input);
    document.getElementsByClassName('game-img')[input].style.transform = '';
    document.getElementsByClassName('game-name')[input].style.color = 'transparent';
    document.getElementsByClassName('rules-cont')[input].style.display = 'none';
}

function submitForm(event) {
    event.preventDefault()
    const form = document.querySelector('.form')
    let formData = new FormData(form)
    //console.log(form.elements[0].value)
    //console.log(form)
}