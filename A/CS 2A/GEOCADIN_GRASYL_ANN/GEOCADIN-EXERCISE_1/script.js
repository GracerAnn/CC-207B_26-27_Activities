const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
    }
});

const contactButton = document.getElementById("contactButton");

contactButton.addEventListener("click", function () {
    alert("Thank you for visiting my portfolio!");
});

document.getElementById("year").textContent = new Date().getFullYear();