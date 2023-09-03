//aqui criamos a lista para pegar os progutos
var items = [];

// pegando o elemento de botão, para adicionar a ação
document.querySelector('input[type=submit]')
.addEventListener('click',()=>{
    //aqui adicionamos uma ação para o botão

    // as variaveis para pegarmos os elementos dentro dos inputs
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var valorProduto = document.querySelector('input[name=price_produto]');

    // aqui adicionamos os elementos pegos dentro da lista
    items.push({
        nome:nomeProduto.value,
        valor:valorProduto.value
    });
    // nesse momento criamos uma variavel para pegar o elementos de lista de produtos do html 
    let listaProdutos = document.querySelector('.lista_de_produtos')
    
    // adicionanmos uma variavel para realizar a soma
    let soma = 0;
    //resetando a lista de produtos, para ficar vazio de novo
    listaProdutos.innerHTML ="";
    // a função map, pode ser considerada um loop para setar os elementos dentro da lista de produtos
    items.map(function(val){
        //aqui pegamos os valores de dentros dos inputs e realizamos um parse, para ser considerado um número
        soma+= parseFloat(val.valor)
        // setando os elementos dentro da div
        listaProdutos.innerHTML+= `
        <div class="lista_de_produtos_single">

        <h3>`+val.nome+`</h3>
        <h3 class="price_produto"><span>$`+val.valor+`</span></h3>
        
        </div>
        `;
    })
    //limitando os valores da soma, para apenas 2 números decimais
    soma = soma.toFixed(2);
    //resentando os valores dentro dos inputs
    nomeProduto.value = "";
    valorProduto.value = "";
    //setando os valores de soma, e mostrando isso ao usuário
    let elementoSoma = document.querySelector('.soma_produto h1')
    elementoSoma.innerHTML = "R$"+soma;   
})
//criando função de limpar 
document.querySelector("button[name=limpar]")
.addEventListener("click",()=>{
    //primeiro dizemos que todos os elementos dentro da lista, irão ser vazios 
    items = [];
    // e os elementos dentro tanto da lista, como dos valculos de soma, tbm serão vazios.
    document.querySelector('.lista_de_produtos').innerHTML = "";
    document.querySelector('.soma_produto h1').innerHTML = "";


})