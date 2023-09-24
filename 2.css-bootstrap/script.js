"use strict";

const headerInput = document.querySelector('.header__input');
const headerInputDatalist = document.querySelector('.datalist');
console.log(headerInput);

headerInput.addEventListener('focus', () => {
  headerInputDatalist.classList.add('active');
  document.querySelector('.input__label').classList.add('active');
});

headerInput.addEventListener('blur', () => {
  headerInputDatalist.classList.remove('active');
  document.querySelector('.input__label').classList.remove('active');
});