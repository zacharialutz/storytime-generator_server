const demoStories = [
	'The quick brown fox jumped over the lazy dog.',
	'This is the best of stories. This is the worst of stories.',
	'For sale: baby shoes, never worn.',
	'Once upon a time there was a test story.',
	'My very eager mother just served us nine pizzas.',
	'Rubber baby buggy bumpers',
	'Winner winner, chicken dinner!',
	'This is a test. A test it is. Test test test.',
	'The question is: how far down the rabbit hole do you want to go?',
	'The more things change, the more they stay the same.'
]

// Returns a random integer from 1 to (num)
function roll(num) {
	return Math.floor( (Math.random() * num) ) + 1;
}

// Returns a random item from demo array
function randomDemo() {
	const pick = roll(demoStories.length);
	return demoStories[pick];
}

// Returns array of stories
function generate() {
	const num = 3;
	let result = [];
	for (let i = 0; i < num; i++) {
		res.push({
			content: randomDemo()
		});
	};
	return ['test', 'TEST'];
}

module.exports = { generate };