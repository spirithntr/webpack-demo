import _ from 'lodash';
import printMe from './print.js';

function component() {
  let element = document.createElement('div');
  let button = document.createElement('button');

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  button.innerHTML = 'Click me and check';
  button.onclick = printMe;

  element.appendChild(button);
  return element;
}

document.body.appendChild(component());
