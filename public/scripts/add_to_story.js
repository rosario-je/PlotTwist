document.addEventListener('DOMContentLoaded', function () {
  const textarea = document.getElementById('storyTextarea');
  const wordCountDisplay = document.getElementById('wordCount');
  const maxWords = 500;

  textarea.addEventListener('input', function () {
    const words = textarea.value.trim().split(/\s+/).filter(Boolean).length;
    const remainingWords = maxWords - words;
    wordCountDisplay.textContent = remainingWords;
    if (remainingWords < 0) {
      textarea.value = textarea.value.split(/\s+/).slice(0, maxWords).join(' ');
      wordCountDisplay.textContent = 0;
    }
  });
});
