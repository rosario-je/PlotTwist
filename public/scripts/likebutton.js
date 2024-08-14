// Script for like button counter functionality
// Like button and Like counter elements in HTML need to be together for this function to work properly

$(document).ready(() => {
  $('.like-button-story').on('click', function (event) {
    event.preventDefault();

    let storyId = $(this).data('liked_story');
    const likeCountElement = $(this).siblings('.like-count');
    let upvote_count = parseInt(likeCountElement.text());

    upvote_count++;
    likeCountElement.text(upvote_count);

    $.ajax({
      url: `/stories/` + storyId + `/like`,
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        type: 'story',
        id: storyId,
        upvote_count: upvote_count
      }),
      success: function (response) {
        console.log('Story like count updated');
      },
      error: function (xhr, status, error) {
        console.error('Error updating story like count:', error);
      }
    });
  });

  $('.like-button-contribution').on('click', function (event) {
    event.preventDefault();

    let contributionId = $(this).data('liked_contribution');
    let storyId = $(this).data('story_id');
    const likeCountElement = $(this).siblings('.like-count');
    let upvote_count = parseInt(likeCountElement.text());

    upvote_count++;
    likeCountElement.text(upvote_count);

    $.ajax({
      url: `/stories/`+ storyId + `/like`,
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        type: 'contribution',
        id: contributionId,
        upvote_count: upvote_count
      }),
      success: function (response) {
        console.log('Contribution like count updated');
      },
      error: function (xhr, status, error) {
        console.error('Error updating contribution like count:', error);
      }
    });
  });
});