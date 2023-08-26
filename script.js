document.addEventListener("DOMContentLoaded", function () {
    const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");

    button1.addEventListener("click", function () {
        button1.style.display = "none";
        setTimeout(() => {
            button1.style.display = "block";
        }, 2000);
    });

    button2.addEventListener("click", function () {
        button2.style.display = "none";
        setTimeout(() => {
            button2.style.display = "block";
        }, 2000);
    });
});
