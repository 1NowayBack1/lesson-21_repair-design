/*
document.addEventListener("DOMContentLoaded", function (event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });
  closeBtn.addEventListener('click', switchModal);
});
*/

$(document).ready(function () {
  var modal = $('.modal'),
    modal__Btn = $('[data-toggle=modal]'),
    close__Btn = $('.modal__close');
  
  modal__Btn.on('click', function () {
    modal.toggleClass('modal--visible');  
  });
  close__Btn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
});
