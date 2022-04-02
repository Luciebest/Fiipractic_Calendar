import { createElement } from './app/dom-utils.js';

import { render as renderHeader } from './app/components/header.js';
import { render as renderDatePicker } from './app/components/date-picker.js';
import { render as renderEvent } from './app/components/event.js';

(() => {  
  const appElement = document.getElementById('wrapper');
  
  renderHeader(appElement);
  renderAppContent(appElement);

  renderDatePicker(document.getElementById("calendar-wrapper"));
  renderEvent(document.getElementById("event-list"));

  function renderAppContent(rootElement) {
    const element = createElement('section', {
      innerHTML: `
        <aside>
          <div id="calendar">
              <h3>Calendar</h3>
              <div id="calendar-wrapper">
              <header>
              <button class="calendar-previous-month"><<</button>
              <button class="calendar-previous-day"><</button>
              <button class="calendar-next-day">></button>
              <button class="calendar-next-month">>></button>
              
              </div>

          </div>
          <div id="categories">
              <h3>Categories</h3>
            <div class="wrapper">
              <div class="category-wrapper">
                <div class="box blue"></div>
                <span>Appointments</span>
              </div>
              <div class="category-wrapper">
                <div class="box purple"></div>
                <span>Meetings</span>
              </div>
              <div class="category-wrapper">
                <div class="box wine"></div>
                <span>Courses</span>
              </div>
              <div class="category-wrapper">
                <div class="box yellow"></div>
                <span>Birthdays</span>
              </div>
            </div>
         
          </div>
        </aside>
        <main>
            <h2>Events of the day</h2>
            <section id="event-list">
            
            </section>
        </main>

      `
    });
    rootElement.appendChild(element);
  }
})();