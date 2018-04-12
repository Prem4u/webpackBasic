import _ from 'lodash';

function component() {
	var div1 = createANode('div');
	var div2 = createANode('div');
	var div3 = createANode('div');

	var h2 = createANode('h2', [ 'Hello Webpack' ]);

	div1.appendChild(h2);
	var button = createANode('button', 'clickMe');
	button.onclick = () => {
		var pTagPresent = document.getElementsByTagName('p');
		console.log(!pTagPresent.length);
		if (!pTagPresent.length) {
			button.innerHTML = 'hideMe';
			var p = createANode('p', 'Welcome to webpack ! Secret get resolved !');
			div3.appendChild(p);
		} else {
			console.log(pTagPresent[0]);
			button.innerHTML = 'clickMe';
			pTagPresent[0].parentNode.removeChild(pTagPresent[0]);
		}
	};
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