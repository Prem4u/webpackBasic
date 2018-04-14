import _ from 'lodash';
import './css/style.css';
import Icon from  './img/webpack-tuts.jpg';
import Data from './data/data.xml';

function component() {
	var div1 = createANode('div');
	var div2 = createANode('div');
	var div3 = createANode('div');
	div1.className='main';
	div2.className= 'img-class';
	div3.className='last-div';
	var h2 = createANode('h2', [ 'Hello Webpack2' ]);
    div1.appendChild(h2);
	var img = new Image();
	img.src=Icon;
	div2.appendChild(img);
	var button = createANode('a', 'showMe');
	button.className='button';
	button.addEventListener('click', () => {
		var pTagPresent = document.getElementsByTagName('p');
		console.log(!pTagPresent.length);
		if (!pTagPresent.length) {
			button.innerHTML = 'hideMe';
			var p = createANode('p', 'Welcome to webpack2 !! Secrets get resolved !');
			div3.appendChild(p);
		} else {
			console.log(pTagPresent[0]);
			button.innerHTML = 'showMe';
			pTagPresent[0].parentNode.removeChild(pTagPresent[0]);
		}
	});
	div2.appendChild(button);
	div1.appendChild(div2);
	div1.appendChild(div3);
	return div1;
}

function createANode(NodeName, text) {
	var node = document.createElement(NodeName);
	if (text) {
		if (Array.isArray(text))
			node.innerHTML = _.join(text, ' ');
		else
			node.innerHTML = text;
	}
	return node;
}


document.body.appendChild(component());

console.log("xml data loaded :"+JSON.stringify(Data));


