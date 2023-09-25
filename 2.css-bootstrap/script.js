"use strict";

const headerInput = document.querySelector('.header__input');
const headerInputDatalist = document.querySelector('.datalist');

headerInput.addEventListener('focus', () => {
  headerInputDatalist.classList.add('active');
  document.querySelector('.input__label').classList.add('active');
});

headerInput.addEventListener('blur', () => {
  headerInputDatalist.classList.remove('active');
  document.querySelector('.input__label').classList.remove('active');
});

const card = `<div class="card__container border">
  <div class="card text-start border-0 bg-transparent m-2">
    <img class="card-img-top rounded-0" src="./assets/img/card_photo.png" alt="Title">
    <div class="card-body p-1">
      <h4 class="card-title fs-6">Без слов</h4>

      <div class="row card__description flex-row justify-content-between pb-2 fs-6">
        <div class="col-3 card_avatar p-0 ps-2">
          <img src="./assets/img/card_avatar.png" alt="card_avatar" width="48">
        </div>

        <div class="col-9 card_avatar__description ps-2">
          <div class="card_avatar__name">Настя Ивлеева Вячеславовна</div>
          <div class="card_avatar__checked">
            <span>проверено</span>
            <img src="./assets/img/checked_icon.png" alt="checked_icon">
          </div>
        </div>
      </div>

      <div class="row rare justify-content-between p-0 pb-2 fs-6">
        <div class="rare-description w-50">Редкость:</div>
        <div class="pe-1 w-50">
          <div class="rare-amount text-center">уникальная</div>
        </div>
      </div>

      <div class="row price flex-row justify-content-between p-0 pb-2 fs-6">
        <div class="price-description w-50">Цена:</div>
        <div class="pe-1 w-50">
          <div class="price-amount text-center ms-2 me-1 p-1">от 500 ₽</div>
        </div>
      </div>

      <div class="row buy-btn__container p-1 mx-auto flex-row justify-content-center align-items-center">
        <button class="btn buy__btn text-center">Купить</button>
      </div>
    </div>
  </div>
</div>`;

const cardContainer = document.querySelector('#search-results');
renderSearchResults(cardContainer);

function renderSearchResults(parent) {
  parent.innerHTML = '';
  for (let i = 0; i < 18; i ++) {
    const newCard = document.createElement('div');
    newCard.classList.add('col-6', 'col-md-4', 'col-lg-3', 'px-3', 'pt-3', 'card__padding');
    newCard.innerHTML = card;

    parent.append(newCard);
  }
}
