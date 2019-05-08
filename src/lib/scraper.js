import axios from "axios";
import cheerio from "cheerio";
import accountConfig from "./account-configurations";
import AWS from 'aws-sdk';
const dynamoDb =  new AWS.DynamoDB.DocumentClient();

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
  const now = new Date();
  const currentDay = ("0" + now.getDate()).slice(-2);
  const currentMonth = ("0" + (now.getMonth() + 1)).slice(-2);
  const today = `${currentDay} - ${currentMonth} - ${now.getFullYear()}`;
  const currentTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

  const params = {
    TableName: "likesapi",
    Item: {
      id: today + currentTime,
      twitter: tCount,
      instagram: iCount,
      date: today,
      updatedAt: currentTime
    }
  };

  return await new Promise((resolve, reject) => {
    try{dynamoDb.put(params, (error, data) => {
      if (error) {
        console.log(`createChatMessage ERROR=${error.stack}`);
        resolve({
          statusCode: 400,
          error: `Could not create message: ${error.stack}`
        });
        } else {
          console.log(`createChatMessage data=${JSON.stringify(data)}`);
          resolve({ statusCode: 200, body: JSON.stringify(params.Item) });
        }
      });

    }catch{
      err => console.log}
  });
}

