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
    if(scrolldown <= 150) {
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
var height_home=document.getElementById('home').getBoundingClientRect().height
function hidenav(){
    //console.log(window.pageYOffset)
    
    if(50<window.pageYOffset&&window.pageYOffset<height_home){
        document.getElementById('left-nav').style.display='none'
        document.getElementById('right-nav').style.display='none'
    }
    
    else{
        
        document.getElementById('left-nav').style.display='flex'
        document.getElementById('right-nav').style.display='flex'
    }
}
let previous=4
function img_slide(input){
    
    
    var ten_vh= 10+2*document.getElementsByClassName('name')[input].getBoundingClientRect().height
    document.getElementsByClassName('game-img')[input].style.transform='translateY('+ten_vh+'px)'
    //console.log(document.getElementsByClassName('game-img')[input])
    setTimeout(function(){
        //console.log(input)
        //console.log(previous)
        if(input!=previous){
            document.getElementsByClassName('game-name')[input].style.color='white'
            document.getElementsByClassName('rules-cont')[input].style.display='flex'
            document.getElementsByClassName('rules-cont')[input].style.marginTop='-10px'
        }
        previous=input
        
    },200)
    if(!first_time){
        var i=previous
        
        //console.log(i)
       
        document.getElementsByClassName('game-img')[i].style.transform=''
        document.getElementsByClassName('game-name')[i].style.color='transparent'
        document.getElementsByClassName('rules-cont')[i].style.display='none'
    }
    first_time=false
    
}
