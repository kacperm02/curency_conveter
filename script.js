{
let pln = document.querySelector('.pln');
let eur = document.querySelector('.eur');
let exchange__form = document.querySelector('.exchange__form');
let currency = 4.6477;

exchange__form.addEventListener("input", () => {
    let number_pln = +pln.value;

    let result = number_pln / currency;

    eur.value = result.toFixed(2);
    
});
 const toggleBackground = () => {
    const body = document.querySelector(".body");
    const nextColorName = document.querySelector(".js-nextColorName");

    body.classList.toggle("background--dark")
    nextColorName.innerText = body.classList.contains("background--dark") ? "Zmień kolor tła na jasny" : "Zmień kolor tła na ciemny";
 }
 const init = () => {
    const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
    changeBackgroundButton.addEventListener("click", toggleBackground);
 }

 init();

button.addEventListener("click", () => {
    body.classList.toggle("darkBackground");
    button.innerText = body.classList.contains('darkBackground') ? "Zmień kolor tła na jasny" : "Zmień kolor tła na ciemny";
})
}