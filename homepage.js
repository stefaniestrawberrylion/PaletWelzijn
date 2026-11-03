// Mobiel menu

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');

menuButton.addEventListener('click', () => {

    const open = nav.classList.toggle('open');

    menuButton.setAttribute('aria-expanded', open);

    menuButton.textContent = open ? '×' : '☰';

});

// Navigatie

nav.querySelectorAll('a').forEach(link => {

    link.addEventListener('click', () => {

        nav.classList.remove('open');

        menuButton.setAttribute('aria-expanded', 'false');

        menuButton.textContent = '☰';

        nav.querySelectorAll('a').forEach(a => {
            a.classList.remove('active');
        });

        link.classList.add('active');

    });

});

// Profielknop

document.querySelector('#profileBtn').addEventListener('click', () => {

    const toast = document.querySelector('#toast');

    toast.textContent = 'Profielpagina is nog niet beschikbaar.';

    toast.style.display = 'block';

    setTimeout(() => {
        toast.style.display = 'none';
    }, 2600);

});
