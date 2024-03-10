document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const body = document.body;

  toggleButton.addEventListener("click", function () {
    body.classList.toggle("white-bg");

    // Toggle text visibility and color
    const textElements = document.querySelectorAll(".white-text");
    textElements.forEach((element) => {
      element.classList.toggle("hidden");
    });
  });
});

