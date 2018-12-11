import createElements from './createElements.js';

function insertElements(dataArray, template) {
        dataArray.forEach(item => {
        	const card = createElements(item, template);
        	const wrap = document.querySelector(template.wrap);

        	wrap.appendChild(card);
        });
        }

export default insertElements;