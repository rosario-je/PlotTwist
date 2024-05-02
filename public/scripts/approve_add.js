const approveStory = document.getElementsByClassName('complete-story');

$(document).ready(()=> {
 $('.approve').on('click', (event) => {
  console.log("Test");
  const contribution_id = $(event.target).data('contribution_id');
  const story_id = $(event.target).data('story_id');
  console.log($(event.target).data('contribution_id'))
  // '/:id/pending/:story_id/:contribution_id/update_story'
  const route = `/user/1/pending/${story_id}/${contribution_id}/update_story`;
  $.post(route, (results) => {
    console.log("Ajax call complete", results);
    $(event.target).remove();
  });
  console.log($(event.target).data('contribution_id'));
 })
});