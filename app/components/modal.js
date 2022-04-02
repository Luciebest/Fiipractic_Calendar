import { createElement, compile } from '../dom-utils.js';
import { today } from '../components/date-picker.js';
import * as storage from '../storage-utils.js';


const template = `
  <div>
    <form>
      <label for="title">Title</label>
      <input type="text" name="title" id="title">
      <label for="details">Details</label>
      <textarea name="details" id="details"></textarea> 
      <label for="priority">Priority</label>
      <select id="priority" name="priority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <label for="category">Category</label>
      <select id="category" name="category">
        <option value="appointments">Appointments</option>
        <option value="meetings">Meetings</option>
        <option value="courses">Courses</option>
        <option value="birthdays">Birthdays</option>
      </select>
      <div class="actions">
        <button name="save">Save</button>
        <button name="close" type="button">Cancel</button>
      </div>
    </form>
  </div>
`;



const save = (event) => {

  let eventData = [...event.target]
    .filter(element => {
      return element.nodeName !== 'BUTTON'
    })
    .reduce((acc, element) => {
      const { name, value } = element;

      return { ...acc, [name]: value };
    }, {});


  eventData["timestamp"]=today.toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
  });

  storage.set(Date.now().toString(), eventData);
}

export const render = () => {
  const element = createElement('div', {
    id: 'app-modal',
    innerHTML: compile(template, {
      title: 'Calendar',
      buttonLabel: 'Add Event'
    })
  });

  document.body.appendChild(element);

  const modalRoot = document.getElementById('app-modal');
  const form = modalRoot.querySelector('form');

  form.addEventListener('submit', save, false);
  form.querySelector('button:last-of-type')
    .addEventListener('click', (event) => {
      form.removeEventListener('submit', save, false);
      modalRoot.parentNode.removeChild(modalRoot);
    })
}