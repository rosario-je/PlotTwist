// Script for like button counter functionality
// Like button and Like counter elements in HTML need to be together for this function to work properly

$(document).ready(() => {
  $('.like-button').on('click', function (event) {
    event.preventDefault();

    let storyId = $(this).data('liked_story');
    const likeCountElement = $(this).siblings('.like-count');
    let upvote_count = parseInt(likeCountElement.text());

    upvote_count++;
    likeCountElement.text(upvote_count);
    const route = `/stories/${storyId}`;

    $.ajax({
      url: '/like/stories/' + storyId,
      type: 'POST',
      data: { upvote_count: upvote_count },
      success: function (response) {
      },
      error: function (xhr, status, error) {
        console.error('Error updating like count:', error);
      }
    });
  });
});