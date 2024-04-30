// Script for like button counter functionality
// Like button and Like counter elements in HTML need to be together for this function to work properly

const likeButtons = document.getElementsByClassName('like-button');
for (const likeButton of likeButtons) {
  let likeCount = 0;
  likeButton.addEventListener('click', function() {
    const likeCountElement = likeButton.nextElementSibling;
    likeCount = Number(likeCountElement.innerText);
    likeCount++;
    likeCountElement.innerText = likeCount;
  });
}