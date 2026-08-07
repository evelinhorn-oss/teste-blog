function curtir(botao) {
    const icone = botao.querySelector('.icone');
    const contador = botao.querySelector('.contador');
    let qtd = parseInt(contador.textContent);

    if (botao.classList.contains('curtido')) {
        // Descurtir
        botao.classList.remove('curtido');
        icone.textContent = '♡';
        contador.textContent = qtd - 1;
    } else {
        // Curtir
        botao.classList.add('curtido');
        icone.textContent = '♥';
        contador.textContent = qtd + 1;
    }
}