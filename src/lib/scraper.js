import axios from 'axios';
import cheerio from 'cheerio';
import accountConfig from './account-configurations';

export async function getHTML(url) {
	try {
		const { data: html } = await axios.get(url);
		return html;
	} catch (err) {
		console.log(err);
	}
}

export async function getTwitterFollowers(html) {
	try {
		const $ = cheerio.load(html);
		const span = $('[data-nav="followers"] .ProfileNav-value');
		return span.data('count');
	} catch (err) {
		console.log(err);
	}
}

export async function getInstagramFollowers(html) {
	try {
		const $ = cheerio.load(html);
		const dataInString = $('script[type="application/ld+json"]').html();
		const pageObject = JSON.parse(dataInString);
		return parseInt(
			pageObject.mainEntityofPage.interactionStatistic.userInteractionCount
		);
	} catch (err) {
		console.log(err);
	}
}

export async function getInstagramCount() {
	try {
		const html = await getHTML('https://instagram.com/jeanrauwers');
		const instagramCount = await getInstagramFollowers(html);
		return instagramCount;
	} catch (err) {
		console.log(err);
	}
}
export async function getTwitterCount() {
	try {
		const html = await getHTML('https://twitter.com/jeanrauwers');
		const twitterCount = await getTwitterFollowers(html);
		return twitterCount;
	} catch (err) {
		console.log(err);
	}
}

// export async function taskRunner() {
// 	const [iCount, tCount] = await Promise.all([
// 		getInstagramCount(),
// 		getTwitterCount()
// 	]);
// 	db.get('twitter')
// 		.push({
// 			date: Date.now(),
// 			count: tCount
// 		})
// 		.write();
// 	db.get('instagram')
// 		.push({
// 			date: Date.now(),
// 			count: iCount
// 		})
// 		.write();
// 	console.log('Done!');
// }
