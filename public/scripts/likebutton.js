// Script for like button counter functionality
// Like button and Like counter elements in HTML need to be together for this function to work properly

const likeButton = document.getElementsByClassName('like-button');
const likeCount = document.getElementsByClassName('like-count');

// for (const likeButton of likeButtons) {
//   let likeCount = 0;
//   likeButton.addEventListener('click', function() {
//     const likeCountElement = likeButton.nextElementSibling;
//     likeCount = Number(likeCountElement.innerText);
//     likeCount++;
//     likeCountElement.innerText = likeCount;
//   });
// }

$(document).ready(() => {
  $(likeButton).on('click', (event) => {
    event.preventDefault();
    const story_id = $(event.currentTarget).data('liked_story');
    const likeCountElement = $(event.currentTarget).siblings(likeCount);
    let upvote_count = parseInt(likeCountElement.text());
    upvote_count++;
    likeCountElement.text(upvote_count);
    console.log("AJAX ONE", upvote_count, story_id);
    const route =`/stories/${story_id}`;
    // $.post(route, { upvote_count }, (results) => {
      $.post(route, (res, req) => {
        console.log("AJAX", results);
      })
    });
  });
