document.addEventListener('DOMContentLoaded', function () {
    let texto = document.getElementById("texto");
    let hill1 = document.getElementById("hill1");
    let hill4 = document.getElementById("hill4");
    let hill5 = document.getElementById("hill5");
    let leaf = document.getElementById("leaf");

    window.addEventListener('scroll', () => {
        let value = window.scrollY;

        texto.style.paddingTop = value * 1.7 + 'px';
        leaf.style.top = value * -1.0 + 'px';
        leaf.style.left = value * 1.0 + 'px';
        hill5.style.left = value * 1.3 + 'px';
        hill4.style.left = value * -1.3 + 'px';
        hill1.style.top = value * 1.0 + 'px';
    });
});
const cursor = document.getElementById("circle-cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX - cursor.offsetWidth / 2 + "px";
    cursor.style.top = e.clientY - cursor.offsetHeight / 2 + "px";

    const targetElement = document.elementFromPoint(e.clientX, e.clientY);

    if (targetElement) {
        cursor.style.backgroundColor = "#ffffffd8";
        cursor.style.display = 'block';
        if (targetElement.tagName === "H2") {
            cursor.style.backgroundColor = "#007c63";
        } else if (targetElement.tagName === "HEADER" || targetElement.tagName === "NAV") {
            cursor.style.backgroundColor = "#007c63";
            cursor.style.transform = "scale(1)";
        } else if (targetElement.tagName === "A") {
            cursor.style.transform = "scale(0.35)";
        } else if (document.onmouseout) {
            cursor.style.display = "none";
        }
    }
});

