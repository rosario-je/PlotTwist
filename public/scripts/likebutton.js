const likeButtons = document.getElementsByClassName('like-button');
for (const likeButton of likeButtons) {
  let likeCount = 0;
  likeButton.addEventListener('click', () => {
    const likeCountElement = likeButton.nextElementSibling;
    likeCount++;
    likeCountElement.innerText = likeCount;
  });
}