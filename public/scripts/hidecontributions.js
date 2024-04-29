// Script that default hides the contributions on the page 

const viewButton = document.getElementById('viewadds');
const contributions = document.querySelector(".contributions")
viewButton.addEventListener('click', () => {
  contributions.classList.toggle("hiddentext")
});