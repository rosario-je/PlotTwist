// User marks their story as completed 

const markCompleted = document.getElementsByClassName('complete-story');

$(document).ready(()=> {
 $('.story_card_container').on('click', '.complete-story', (event) => {
  const story_id = $(event.target).data('story');
  const route = `stories/${story_id}/completed`;
  $.post(route, (results) => {
    console.log("Ajax call complete", results);
    $(event.target).remove();
  });
  console.log($(event.target).data('story'));
 })
});