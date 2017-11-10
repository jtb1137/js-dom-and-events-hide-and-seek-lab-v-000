function getFirstSelector(selector) {
	return document.querySelector(selector)
}

function nestedTarget(target) {
	return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
	const listItem = document.querySelectorAll('.ranked-list li')
	for (let i=0; i<listItem.length; i++) {
		let listInt = parseInt(listItem[i].innerHTML)
		listItem[i].innerHTML = listInt + n
	}
}

function deepestChild() {
	const divs = document.querySelectorAll('#grand-node div')
	return divs[divs.length - 1]
}