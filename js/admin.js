const list = document.querySelectorAll('.list')
 const title = document.querySelectorAll('.title')
 const menu = document.querySelector('.toggle')
 const nav = document.querySelector('#navigation')
  menu.onclick = function(){
      menu.classList.toggle('active')
      nav.classList.toggle('active')
  }
 function activeLink (){
     list.forEach((item) =>
     item.classList.remove('active'))
     this.classList.add('active')
 }
 list.forEach((item)=>
 item.addEventListener('click',activeLink))