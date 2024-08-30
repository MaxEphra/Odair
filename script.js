// Abrir Modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");
const images = document.querySelectorAll(".gallery-item img");
const close = document.querySelector(".close");

images.forEach(image => {
    image.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Fechar Modal
close.addEventListener("click", function() {
    modal.style.display = "none";
});

// Fechar Modal ao clicar fora da imagem
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.classList.contains("menu-hidden")) {
        menu.classList.remove("menu-hidden");
        menu.classList.add("menu-visible");
    } else {
        menu.classList.remove("menu-visible");
        menu.classList.add("menu-hidden");
    }
}

// Mostrar o botão quando o usuário rolar a página para baixo
window.onscroll = function() {
    var backToTopButton = document.getElementById("back-to-top");
    if (window.scrollY > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

document.getElementById("back-to-top").onclick = function() {
    console.log("Botão clicado!");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};