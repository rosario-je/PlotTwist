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
    console.log(upvote_count, story_id);
    const route =`/stories/${story_id}/liked`;
    $.post(route, { upvote_count }, (results) => {
      console.log(results);
    });
  });
});