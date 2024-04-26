const viewButton = document.getElementById('viewadds');
const contributions = document.querySelector(".contributions")
viewButton.addEventListener('click', () => {
  contributions.classList.toggle("hiddentext")
});