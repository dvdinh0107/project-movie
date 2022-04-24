const seeMore = document.querySelector('.movie');
const buttonSeeMore = document.querySelector('.add--list');

 function see(){
    buttonSeeMore.classList.add('hiden')
    seeMore.classList.add('active')
}
buttonSeeMore.addEventListener('click', see)


const menuu = document.querySelector('.menu-reponsive');
const categoryy = document.querySelector('.category');

function showMenu (){
    categoryy.classList.toggle('active');
}
 menuu.addEventListener('click',showMenu);


//search
 const searchInputt = document.querySelector('.search-input')
 const searchs = document.querySelector('.search')
 function showInput (){
     searchInputt.classList.add('active')
 }
 searchs.addEventListener('click',showInput)




 