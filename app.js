const menu = document.querySelector('.menu');
const hidemenu = document.querySelector('.hidemenu');
console.log(menu);

menu.onclick = function(){
    console.log('click');
    hidemenu.classList.toggle('hide');
}