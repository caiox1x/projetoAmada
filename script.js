const mensagem = "Melhor Decisão da sua vida";
const btnSim = document.getElementById('sim');
const btnNao = document.getElementById('nao');
const mensagemElement = document.getElementById('mensagem');

btnSim.addEventListener('click', function() {
    window.location.href = 'pagina2/carta.html'
    mensagemElement.style.display = 'block'; // Mostra a div da mensagem
});


btnNao.addEventListener('mouseover', function() {
    const maxWidth = window.innerWidth - btnNao.offsetWidth;
    const maxHeight = window.innerHeight - btnNao.offsetHeight;

    const novaX = Math.random() * maxWidth;
    const novaY = Math.random() * maxHeight;

    btnNao.style.left = novaX + 'px';
    btnNao.style.top = novaY + 'px';
});
