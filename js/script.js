window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll(".mobile-btn").forEach(el => {
        el.addEventListener('click',function (e) {
            document.querySelector(".menu").classList.toggle("active")
        });
    });
});

