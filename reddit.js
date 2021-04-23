const path = require("path");
const fs = require("fs");
const rp = require("request-promise");

const getReddit = async () => {
  try {
    const res = await rp("https://reddit.com/r/popular.json");
    const reddit = JSON.parse(res);
    let redditPosts = [];

    reddit.data.children.forEach((post) => {
      redditPosts.push({
        title: post.data.title,
        url: post.data.url,
        author: post.data.author,
      });
    });
    const redditData = JSON.stringify(redditPosts);
    fs.writeFileSync("reddit-popular.json", redditData);
  } catch {
    console.log(e);
  }
};

getReddit();
