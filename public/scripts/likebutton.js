const likeButton = document.getElementById('like-button');
const likeCountElement = document.getElementById('like-count');
let likeCount = 0;
likeButton.addEventListener('click', () => {
  likeCount++;
  likeCountElement.innerText = likeCount;
});