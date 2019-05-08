import axios from "axios";
import cheerio from "cheerio";
import accountConfig from "./account-configurations";

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
    return span.data("count");
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
    const html = await getHTML(accountConfig.instagramUlr);
    const instagramCount = await getInstagramFollowers(html);
    return instagramCount;
  } catch (err) {
    console.log(err);
  }
}
export async function getTwitterCount() {
  try {
    const html = await getHTML(accountConfig.twitterUrl);
    const twitterCount = await getTwitterFollowers(html);
    return twitterCount;
  } catch (err) {
    console.log(err);
  }
}

export async function taskRunner() {
  const iCount = await getInstagramCount();
  const tCount = await getTwitterCount();
  postDataToDynamo(iCount,tCount);

}

export async function postDataToDynamo(iCount, tCount){
	const dataObj = {
		instagram: iCount,
		twitter: tCount
	  };
	 axios({
		  method: "post",
		  url:
			"https://ta71snvlm4.execute-api.eu-west-2.amazonaws.com/dev/api/likes",
		  headers: {
			"Content-Type": "application/json"
		  },
		  data: await JSON.stringify(dataObj)
		})
		  .then(res => console.log(res))
		  .catch(err => console.error(err));
		console.log("Posted Data!");
	
}