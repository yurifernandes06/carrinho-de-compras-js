let totalGeral = 0;
function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let preco = quantidade * valorUnitario;
    let carrinho =  document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span>${nomeProduto}<span class="texto-azul">R$${valorUnitario}</span> </section>`;
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.innerHTML = `<p class="carrinho__total">
    Total: <span class="texto-azul" id="valor-total">R$${totalGeral}</span> </p>`
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = '';
}