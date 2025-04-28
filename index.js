var content = document.getElementById('content');

window.addEventListener('scroll', contentPosition);
function contentPosition(event) {
    if(window.scrollY > 650){
        content.style.top = window.scrollY - 650 + 'px';
    } else {
        content.style.top = '0px';
    }
}


// const element = document.getElementById('me');
// const rect = element.getBoundingClientRect();
// const y = rect.top + window.scrollY;
// console.log(y);