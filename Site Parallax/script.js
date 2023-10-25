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
