export const setVariable = (idx: number) => {
	if (idx === 0) {
		return { '--i': '0.1s' };
	} else if (idx === 1) {
		return { '--i': '0.15s' };
	} else if (idx === 2) {
		return { '--i': '0.2s' };
	} else if (idx === 3) {
		return { '--i': '0.25s' };
	}
};
