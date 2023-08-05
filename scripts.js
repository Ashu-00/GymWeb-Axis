var icon = document.querySelector("#icon");
document.addEventListener("scroll", function (event) {
    rot1 = ((window.scrollY / 3055) * 360);
    icon.style.transform = `rotate(${rot1}deg)`
});