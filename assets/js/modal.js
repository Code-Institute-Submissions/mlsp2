var modalButton = document.querySelector('.modal-button');

var modalBg = document.querySelector('.modal-bg');

modalButton.addEventListener('click',function(){
    modalBg.classList.add('bg-active');
})