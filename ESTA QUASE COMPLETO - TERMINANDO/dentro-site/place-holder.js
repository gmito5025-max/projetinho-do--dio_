/* ================= PLACEHOLDER ANIMADO ================= */
const phrases = [
    "🔍  O que você precisa?",
    "🛠  Encontre seu serviço",
    "📌 Busque aqui",
    "💡 Digite sua busca"
];

let index = 0;
const input = document.getElementById("searchInput");

// transição suave no CSS
input.style.transition = "color 0.3s ease";

function animatePlaceholder() {
    input.style.color = 'transparent'; // fade out
    setTimeout(() => {
        index = (index + 1) % phrases.length;
        input.setAttribute("placeholder", phrases[index]);
        input.style.color = ''; // fade in
    }, 300);
}

// inicia a primeira frase
input.setAttribute("placeholder", phrases[index]);

// troca a cada 3,5s
setInterval(animatePlaceholder, 3500);


/* ================= NAVBAR DROPDOWN (hover + clique) ================= */
const navItems = document.querySelectorAll('.nav-item');
let activeDropdown = null;

navItems.forEach(item => {
    const dropdown = item.querySelector('.dropdown-menu');
    const icon = item.querySelector('.icon-wrap');

    if (dropdown) {
        // hover normal
        item.addEventListener('mouseenter', () => {
            if (!dropdown.classList.contains('locked')) {
                dropdown.classList.add('grid');
            }
        });

        item.addEventListener('mouseleave', () => {
            if (!dropdown.classList.contains('locked')) {
                dropdown.classList.remove('grid');
            }
        });

        // clicar no ícone trava/destrava o dropdown
        icon.addEventListener('click', e => {
            e.stopPropagation();
            if (activeDropdown && activeDropdown !== dropdown) {
                activeDropdown.classList.remove('grid', 'locked');
            }

            const isLocked = dropdown.classList.toggle('locked');
            dropdown.classList.toggle('grid', isLocked);
            activeDropdown = isLocked ? dropdown : null;
        });
    }
});

// clicar fora fecha qualquer dropdown travado
document.addEventListener('click', () => {
    if (activeDropdown) {
        activeDropdown.classList.remove('locked', 'grid');
        activeDropdown = null;
    }
});

