// Função para abrir o projeto - pode personalizar para abrir modal, página, etc
function abrirProjeto(element) {
  const titulo = element.querySelector('h3').textContent;
  alert(`Você clicou no ${titulo}!`);
}

// Controle das setas para rolar projetos na galeria
const galeria = document.querySelector('.galeria');
const setaEsquerda = document.querySelector('.seta-esquerda');
const setaDireita = document.querySelector('.seta-direita');

setaDireita.addEventListener('click', () => {
  galeria.scrollBy({ left: 300, behavior: 'smooth' });
});

setaEsquerda.addEventListener('click', () => {
  galeria.scrollBy({ left: -300, behavior: 'smooth' });
});

// (Opcional) Efeito simples para destacar item ativo do menu conforme rola a página
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('nav a');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('ativo');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('ativo');
    }
  });
});
