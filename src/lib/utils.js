export function uniqueCount(scrapes) {
	return scrapes.filter((item, i, arr) => {
		if (i === 0) return true; // keep it, it's the first one
		const lastItem = arr[i - 1];
		return !(item.count === lastItem.count);
	});
}
