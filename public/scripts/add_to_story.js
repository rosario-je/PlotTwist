document.addEventListener('DOMContentLoaded', function () {
  const textarea = document.getElementById('storyTextarea');
  const charCountDisplay = document.getElementById('charCount'); // Changed ID to match HTML
  const maxChars = 500; // Changed to max characters

  textarea.addEventListener('input', function () {
    const charCount = textarea.value.length; // Count characters directly
    const remainingChars = maxChars - charCount; // Calculate remaining characters
    charCountDisplay.textContent = remainingChars; // Display remaining characters

    if (remainingChars < 0) {
      textarea.value = textarea.value.slice(0, maxChars); // Limit input to maxChars
      charCountDisplay.textContent = 0;
    }
  });
});
