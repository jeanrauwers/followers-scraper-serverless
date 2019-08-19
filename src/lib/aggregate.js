function isInLastSixHours(timestamp) {

	const defineTimer = 1000 * 60 * 60 * 24; // 24 hours
	if (Date.now() - timestamp < defineTimer) {
		return true;
	}
	return false;
}

export default function aggregate(scrapes) {
	const aggregateScrapes = [...scrapes]
		.reverse()
		.map(scrape => {
			const date = new Date(scrape.date);
			const optionalHour = isInLastSixHours(scrape.date)
				? `-${date.getHours()}`
				: ``;
			const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}${optionalHour}`;
			return {
				
				...scrape
			};
		})
		.reduce((accumulator, currentScrape) => {
			// if it is NOT found, we want to keep it
			if (!accumulator.find(scrape => scrape.key === currentScrape.key)) {
				return [...accumulator, currentScrape];
			}
			return accumulator;
		}, [])
		.reverse();
	return aggregateScrapes;
}
