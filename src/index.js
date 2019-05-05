import { getInstagramCount, getTwitterCount } from './lib/scraper';

export const getLikes = async () => {
	const twitterTotalLikes = await getTwitterCount();
	const instagramTotalLikes = await getInstagramCount();

	return await {
		statusCode: 200,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': true,
		  },
		body: JSON.stringify(
			{
				twitter: twitterTotalLikes,
				instagram: instagramTotalLikes
			},
			null,
			2
		)
	};
};
