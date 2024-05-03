const approveStory = document.getElementsByClassName('complete-story');

$(document).ready(()=> {
 $('.approve').on('click', (event) => {
  const contribution_id = $(event.target).data('contribution_id');
  const story_id = $(event.target).data('story_id');
  const user_id = $(event.target).data('user_id');
  // '/:id/pending/:story_id/:contribution_id/update_story'
  const route = `/user/${user_id}/pending/${story_id}/${contribution_id}/update_story`;
  $.post(route, (results) => {
    console.log("Ajax call complete", results);
    $(event.target).remove();
  });
 })
});