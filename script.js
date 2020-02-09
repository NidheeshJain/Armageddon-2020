var home = document.querySelector('#home');
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

window.onscroll = function(e) {
    //console.log("hi");
    //console.log(window.pageYOffset);
    let scrolldown = window.pageYOffset;
    //console.log(scrolldown)
    let cenimg = document.querySelector('#center-img');
    let leftimg = document.querySelector('#left-img');
    let rightimg = document.querySelector('#right-img');
    if(scrolldown <= 150) {
        cenimg.style.height = "87vh";
        cenimg.style.transform = `scale(${1- (scrolldown*0.0008133)}, ${1 - (scrolldown*0.0008133)})`;
        //zrightimg.style.transform = `translateX(0px)`;
        //leftimg.style.transform = `translate(-0px)`;
        cenimg.style.zIndex = '1';
    }
}
function scroller(){
    if (window.pageYOffset < 175)
    {
        window.scrollBy(0, 200);
        //console.log(window.pageYOffset);
    }
    //console.log(window.pageYOffset);
}

