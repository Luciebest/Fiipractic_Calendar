import { createElement } from '../dom-utils.js';

export const today = new Date();


export const render = (rootElement) => {
  let prevDateSelected = null;
  const section = document.createElement("section");
  const labels = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  for (let i = 0; i < labels.length; i++) {
    const div = createElement("div", {
      textContent: labels[i],
    });
    section.appendChild(div);
  }

  const date = new Date();
  const prevMonth = new Date(today);
  prevMonth.setDate(0);
  date.setDate(1);
  let day = 1;

  const currentMonth = date.getMonth();
  const textMonth = new Intl.DateTimeFormat('en-US', {month:'long'}).format(today);
  const monthLabel = createElement("div", {
    textContent: textMonth,
    id: "month-text"
  });
  
  day = date.getDay();

  while(day > 0) {
    const div = createElement("div", {
      textContent: prevMonth.getDate() - day + 1,
    });
    day--;
    section.appendChild(div);
  }

  day = 1;
  while (date.getMonth() === currentMonth) {
    const div = createElement("div", {
      textContent: day,
      className: "calendar-day-btn"
    });
      
    section.appendChild(div);
    date.setDate(++day);
  }

  rootElement.appendChild(monthLabel);
  rootElement.appendChild(section);

  const calendar_buttons = document.querySelectorAll('.calendar-day-btn');
  calendar_buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (prevDateSelected === null) {
        prevDateSelected = e.target;
      }
      else {
        prevDateSelected.className = "calendar-day-btn";
        prevDateSelected = e.target;
      }
      today.setDate(e.target.textContent);
      e.target.className += " date-selected";
    });
  });
}