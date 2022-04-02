import { createElement, compile } from '../dom-utils.js';
import { render as modalRender } from './modal.js';
const template = `
  <h1>{title}</h1>
  <button name="add-event"><i>+</i>{buttonLabel}</button>
`;

export const render = (rootElement) => {
  const element = createElement('header', {
    className: 'app-header',
    innerHTML: compile(template, {
      title: 'Calendar',
      buttonLabel: 'Add Event'
    })
  });
  rootElement.appendChild(element);

  const addEventButton = rootElement.querySelector('.app-header button');
  addEventButton.addEventListener('click', modalRender, false)
}