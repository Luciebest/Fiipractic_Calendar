import { compile, createElement } from '../dom-utils.js';
import { set, get, storage } from '../storage-utils.js';

const template=`
    <h1>{title}</h1>
    <div>{details}</div>
    <div>{timestamp}</div>
`;

const currentEvents= storage;
console.log(currentEvents);

export const render=(rootElement)=>{
    Object.keys(currentEvents).map(event => {
        const eventDiv=createElement('div', {
                className: 'event-component-' + get(event).category,
                id:'event-box',
                innerHTML: compile(template, {
                title: get(event).title,
                details:  get(event).details,
                timestamp:  get(event).timestamp
            })
        });
        rootElement.appendChild(eventDiv);
    });
}