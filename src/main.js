import {createMenuTemplate} from './view/menu.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template)
};

const siteElement = document.querySelector('.trip-controls');

render(siteElement, createMenuTemplate(), 'beforeend');
