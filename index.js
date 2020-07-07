//console.log(window.innerHeight, window.innerWidth)

//loader starts here
//console.log("hi")
window.scrollTo({
    top: 0,
    left: 0,
})
let pageStatus = null
var progress = null
var animationInterval = 33
document.onreadystatechange = () => {
   // console.log('hi');
    if(document.readyState === "complete")
        pageStatus = "complete"
}

function updateProgress () {
    //console.log(progress)
    if(pageStatus === "complete") {
        // setTimeout(() => {
        //     document.querySelector('.loader').innerHTML = 100
        // document.querySelector('.loader').style.display = "none"
        // document.querySelector('.loader').style.zIndex = "-1"
        // document.querySelector('#wrapper').style.opacity = "1"
        // document.querySelector('#wrapper').style.display = "flex"
            
        // }, 5000)
        document.querySelector('#loader-text').innerHTML = `Loading... 100 %`
        setTimeout(() => {
        document.querySelector('#loader-text').style.display = "none"
        document.querySelector('#loader-text').style.zIndex = "-1"
        document.querySelector('.loader').style.height = "0"
        document.querySelector('.loader').style.width = "0"
        document.querySelector('#wrapper').style.opacity = "1"
        document.querySelector('#wrapper').style.display = "flex"
        }, 600)
    }
    else {
        if(progress == null){
            progress = 1;
        }
       
        progress = progress + 1;
        if(progress >= 0 && progress <= 30){
            animationInterval += 1;
            document.querySelector('#loader-text').innerHTML = `Loading ${progress} %`;
        }
        else if(progress > 30 && progress <= 60){
            animationInterval += 2;
            document.querySelector('#loader-text').innerHTML = `Loading ${progress} %`;
        }
        else if(progress > 60 && progress <= 80){
            animationInterval += 4;
            document.querySelector('#loader-text').innerHTML = `Loading ${progress} %`;
        }
        else if(progress > 80 && progress <= 90){
            animationInterval += 8;
            document.querySelector('#loader-text').innerHTML = `Loading ${progress} %`;
        }
        else if(progress > 90 && progress <= 95){
            animationInterval += 100;
            document.querySelector('#loader-text').innerHTML = `Loading ${progress} %`;
        }
        else if(progress > 95 && progress <= 99){
            animationInterval += 180;
            document.querySelector('#loader-text').innerHTML = `Loading ${progress} %`;
        }
        else if(progress >= 100){
            document.querySelector('#loader-text').innerHTML = `Loading 99 %`;
        }
        setTimeout(updateProgress, animationInterval);    
    }
    }
    var intervalObject_1 = setInterval(function(){
        //console.log('hi')
        var element = document.querySelector("body");
        if(element != undefined){
            clearInterval(intervalObject_1);
            updateProgress();            
        }
    }, 1);


//loader text ends here

var home = document.querySelector('#home');
let first_time = true
let finalObj = {
    team_name: null,
    game_id: null,
    team_members: []
}

function func(id) {
    if (window.innerWidth >= 500)
        return
    if (id === 'navbar')
        return
    sidebarClose();
}

window.onscroll = function (e) {
    //console.log("hi");
    hidenav()
    //console.log(window.pageYOffset);
    let scrolldown = window.pageYOffset;
    //console.log(scrolldown)
    let cenimg = document.querySelector('#center-img');
    let leftimg = document.querySelector('#left-img');
    let rightimg = document.querySelector('#right-img');
    let arma = document.querySelector('#logo');
    if (scrolldown <= 150 && window.innerWidth > 500) {
        cenimg.style.height = "87vh";
        cenimg.style.transform = `scale(${1 - (scrolldown * 0.00085)}, ${1 - (scrolldown * 0.00085)})`;
        rightimg.style.transform = `translate(${(3.5 / 200 * scrolldown) - 8.0}vw)`;
        leftimg.style.transform = `translate(${(-3.5 / 200 * scrolldown) + 13.0}vw)`;
        arma.style.bottom = `${70 + 0.4 * scrolldown}`;
        cenimg.style.zIndex = '2';
    }
    //first_time=false
}
let checker = true;

function sidebarOpen() {
    if (window.innerWidth >= 500) {
        //console.log('return')
        return
    }
    let ham = document.querySelector('.ham')
    //console.log(ham.classList.contains("change"))
    if(ham.classList.contains("change")) {
        sidebarClose(null)
        return
    }
    //document.getElementById('ham-close').style.display = "block";
    document.getElementById('navbar').style.right = "2px";
    ham.classList.add("change")
}

function sidebarClose(href) {
    if(href) 
    window.location.href = href
    if (window.innerWidth >= 500) {
        //  console.log('return')
        return
    }
    // document.getElementById('navbar').style.display = "none"
    // document.getElementById('ham-close').style.display = "none";
    document.getElementById('navbar').style.right = "-55vw";
    let ham = document.querySelector('.ham')
    ham.classList.remove("change")
}
function scroller(checker) {

    if (window.pageYOffset < 175) {
        //first_time=true
        var x = 20;
        var y = 60;
        var count = 0
        //console.log(first_time)
        var myvar = setInterval(function () {
            if (window.pageYOffset >= 0 && checker) {
                //count++
                //console.log(window.pageYOffset)
                //console.log(count)
                if (window.pageYOffset <= 200) {
                    //console.log('hi')
                    window.scrollBy(0, x);

                }
                if (window.pageYOffset >= 200) {
                    clearInterval(myvar)
                }
            }
        }, y)



        //console.log(window.pageYOffset);
    }
    //function()

    //console.log(window.pageYOffset);
}
var nav_height = (document.getElementById('right-nav').getBoundingClientRect().height / 2) - 20

var height_home = document.getElementById('home').getBoundingClientRect().height + 2 * document.getElementsByClassName('info')[0].getBoundingClientRect().height
function hidenav() {
    if (window.innerWidth < 500)
        return;
    var info = document.getElementsByClassName('info')[0].getBoundingClientRect()
    //console.log(window.pageYOffset)
    var num = info.y + info.height - nav_height
    //console.log(info.y+info.height-nav_height)
    if (50 < window.pageYOffset && num > 0) {
        document.getElementById('left-nav').style.display = 'none'
        document.getElementById('right-nav').style.display = 'none'
        document.getElementById('navbar').style.backgroundColor = 'transparent';
        document.getElementById('navbar').style.transition = '0s'
    }

    else {

        document.getElementById('left-nav').style.display = 'flex'
        document.getElementById('right-nav').style.display = 'flex'
        document.getElementById('navbar').style.backgroundColor = '';
       //document.getElementById('navbar').style.transition = '0.5s ease-in'
    }
}
let previous = 4
function img_slide(input) {

    //console.log(input);
    var ten_vh = 10 + 2 * document.getElementsByClassName('name')[input].getBoundingClientRect().height
    //console.log(ten_vh)
    document.getElementsByClassName('game-img')[input].style.transform = 'translateY(' + ten_vh + 'px)'
    //console.log(document.getElementsByClassName('game-img')[input])

    //console.log(input)
    //console.log(previous)
    document.getElementsByClassName('game-name')[input].style.color = 'white'
    document.getElementsByClassName('rules-cont')[input].style.display = 'flex'
    document.getElementsByClassName('rules-cont')[input].style.marginTop = '-10px'
    //document.querySelectorAll('.game-img')[input].style.transitionDelay = '.4s'
    document.querySelectorAll('.rules')[input].style.transitionDelay = '.1s'
    previous = input

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
//  Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>