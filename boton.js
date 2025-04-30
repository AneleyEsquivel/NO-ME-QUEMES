const botton = document.getElementById("interruptor");

botton.addEventListener("click", () => {
    document.body.classList.toggle("luz-prendida");
    document.body.classList.toggle("luz-apagada");
botton.textContent = document.body.classList.contains("luz-apagada")
? "PENDER LUZ"
: "APAGAR LUZ";

});