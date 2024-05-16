export default (fraction: string) => {
	const [numerator, denominator] = fraction.split('/');
	if (denominator === '0') throw new Error('Cannot divide by zero');
	return parseInt(numerator) / parseInt(denominator);
};
