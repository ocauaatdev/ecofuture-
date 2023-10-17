function addToCart(cardId) {
    var token = localStorage.getItem('token');
    if (token === null) {
        window.location.href ='../pages/erro-addcart.html'
        return; //A função não é executada se não estiver logado
    }

    // Obter informações do card clicado
    var card = document.getElementById(cardId);
    var imgSrc = card.querySelector('.imgproduto').src;
    var nomeProduto = card.querySelector('h3').textContent;
    var preco = card.querySelector('.preco').textContent;

    // Salvar as informações em localStorage ou sessionStorage
    var savedCard = {
        imgSrc: imgSrc,
        nomeProduto: nomeProduto,
        preco: preco
    };
    
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItems.push(savedCard);

    // Armazena os itens do carrinho no armazenamento local
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    alert('Produto adicionado ao carrinho!');
    contadorCarrinho();
}
