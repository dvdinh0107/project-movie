const moreTitle = document.querySelectorAll('.more');
const show = document.querySelector('.show')
const information = document.querySelector('.information-main');

show.onclick = function (){
    for(i=0 ; i < moreTitle.length ; i++){
       moreTitle[i].classList.toggle('active')
    }
    information.classList.toggle('active')
}

const searchInput = document.querySelector('.search-input')
const search = document.querySelector('.search')
function showInput (){
    searchInput.classList.add('active')
}
search.addEventListener('click',showInput)

const menu = document.querySelector('.menu-reponsive');
const category = document.querySelector('.category');

function showMenu (){
    category.classList.toggle('active');
}
 menu.addEventListener('click',showMenu);

//show pass


