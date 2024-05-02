function displayContributions() {
  return $('.view_contributions').slideDown();
}

$(document).ready(function () {
  $('#viewadds').on("click", function (event) {
    event.preventDefault(); 
    $('.view_contributions').slideToggle(); 
  });
});
