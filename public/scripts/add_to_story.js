document.addEventListener('DOMContentLoaded', function () {
  const textarea = document.getElementById('storyTextarea');
  const charCountDisplay = document.getElementById('charCount');
  const maxChars = 500;
  textarea.addEventListener('input', function () {
    const charCount = textarea.value.length;
    const remainingChars = maxChars - charCount;
    charCountDisplay.textContent = remainingChars;
    if (remainingChars < 0) {
      textarea.value = textarea.value.slice(0, maxChars);
      charCountDisplay.textContent = 0;
    }
  });
});
