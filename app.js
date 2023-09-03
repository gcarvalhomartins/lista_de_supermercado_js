//aqui criamos a lista para pegar os progutos
var items = [];

// pegando o elemento de botão, para adicionar a ação
document.querySelector('input[type=submit]')
.addEventListener('click',()=>{
    //aqui adicionamos uma ação para o botão

    // as variaveis para pegarmos os elementos dentro dos inputs
    var nomeProduto = document.querySelector('input[name=nome_produto]').value;
    var valorProduto = document.querySelector('input[name=valor_produto]').value;

    // aqui adicionamos os elementos pegos dentro da lista
    items.push({
        nome:nomeProduto,
        valor:valorProduto
    });
    
    // aqui estamos mostrando os itens da lista, em um alerta da paagina.
    alert(items[0]);
})