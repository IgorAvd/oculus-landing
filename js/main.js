'use strict';

const tubItem = document.querySelectorAll('.tabs__btn-item');
const tobContent = document.querySelectorAll('.tabs__content-item');

tubItem.forEach(function (element) {
  element.addEventListener('click', open);
});

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tubItem.forEach(function (item) {
    item.classList.remove('tabs__btn-item--active');
  });

  tobContent.forEach(function (item) {
    item.classList.remove('tabs__content-item--active');
  });

  tabTarget.classList.add('tabs__btn-item--active');
  document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--active');
});
