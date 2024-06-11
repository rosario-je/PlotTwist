// Script for like button counter functionality
// Like button and Like counter elements in HTML need to be together for this function to work properly

// const likeButton = document.getElementsByClassName('like-button');
// const likeCount = document.getElementsByClassName('like-count');
// const container = document.getElementsByClassName('mainstory');

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
  $('.like-button').on('click', function (event) {
    event.preventDefault();

    let storyId = $(this).data('liked_story');
    const likeCountElement = $(this).siblings('.like-count');
    let upvote_count = parseInt(likeCountElement.text());

    upvote_count++;
    likeCountElement.text(upvote_count);

    console.log("This is the upvote count: ", upvote_count);
    console.log("This is the story_id: ", storyId);

    console.log("AJAX ONE");
    const route = `/stories/${storyId}`;

    $.post(route, { upvote_count, storyId }, (results) => {
      console.log("AJAX", results);
    });
  });
});
