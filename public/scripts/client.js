/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Creates HTML for the Tweet
// const $tweet = $(`<article class="tweet">Hello world</article>`);
const createTweetElement = function(tweet) {
  let tweet = `
  <article class="tweet">
    <header>
      <div class="name-wrapper">
        <img src="${tweet.user.avatars}">
        <span>${tweet.user.name}</span>
      </div>
      <div>
      <span><a class="user-handle" href="#">${tweeter.user.handle}</a></span>
      </div>
    </header>
    <div class="tweet-post">
      <p>${encodeURIComponent(tweet.content.text)}</p>
    </div>
    <footer>
      <span>
        ${timeago.format(tweet["created_at"])}
      </span>
      <span class="icons">
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </span>
    </footer>
  </article>
  `
  return tweet;
}

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('article.container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
















// const createTweetElement = function(tweet) {

// }