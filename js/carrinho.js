if(localStorage.getItem('token') == null){
  window.location.href = '../pages/erro-login.html'
}

function displayCartItems() {
  var cartItemsDiv = document.getElementById('cart-items');
  cartItemsDiv.innerHTML = '';

  // Recupera os itens do carrinho do armazenamento local
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  if (cartItems.length === 0) {
    cartItemsDiv.innerHTML = '<p class=errorMessage>Seu carrinho está vazio.</p>';
  } else {
    for (var i = 0; i < cartItems.length; i++) {
      var produto = cartItems[i];

      var cardProduto = document.createElement('div');
      cardProduto.className = 'card-produto';
      cardProduto.innerHTML =          

      '<div class="produtoInfoConteiner">' +
      '<label class="container">' +
          '<input type="checkbox">' +
          '<span class="checkmark">' + '</span>' +
      '</label>' +        
          '<img  class="imgproduto" src="' + produto.imgSrc + '" alt="Imagem do produto">' +
          '<div class="item-top">' +
          '<h3 id="grid-item" class="tituloProduto">' + produto.nomeProduto + '</h3>' +
          '<p id="grid-item"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit illo earum minus quas ad saepe delectus excepturi, quos, magni totam, nisi perspiciatis repudiandae recusandae dolores blanditiis possimus iure vitae fugiat?'+'</p>'+ 
          '<span id="grid-item" class="preco">' + produto.preco + '</span>' +
      '</div>' +
     '<div class="item-footer">' + 
              '<button onclick="menos()" class="a">' +
                  '<i class="fa-solid fa-minus"></i>' +
              '</button>' +
              '<input placeholder="" min="1" value="1" id="total" type="number" class="quandtidadeProd">' +
              '<button onclick="mais()" class="b">' +
                  '<i class="fa-solid fa-plus"></i>' +
              '</button>' +
      '</div>' +
  '</div>'


      var removeButton = document.createElement('button');
      removeButton.id = 'removeButton';
      removeButton.textContent = '';
      removeButton.classList.add('fa-solid', 'fa-trash', 'trash');
      removeButton.addEventListener('click', createRemoveButtonHandler(i));

      var produtoInfoConteiner = cardProduto.querySelector('.produtoInfoConteiner');
      produtoInfoConteiner.appendChild(removeButton);

      cartItemsDiv.appendChild(cardProduto);
      
      function createCartSummary() {
        var cartSummaryDiv = document.createElement('div');
        cartSummaryDiv.className = 'cartPreco';
        cartSummaryDiv.id = 'cartPreco';
        cartSummaryDiv.innerHTML =
          '<h2>Resumo do pedido</h2>' +
          '<div class="textCart">' +
          '<h3>Subtotal</h3>' +
          '<h3>Frete</h3>' +
          '<span class="line">-----------------------------</span>' +
          '<h3>Total</h3>' +
          '</div>' +
          '<button>Comprar</button>';
      
        // Adicione a div ao documento
        var mainContentDiv = document.getElementById('cart-items');
        mainContentDiv.appendChild(cartSummaryDiv);
      }
      
      createCartSummary();
      
    }
  }
}

function createRemoveButtonHandler(index) {
  return function () {
    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    if (index >= 0 && index < cartItems.length) {
      cartItems.splice(index, 1);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      displayCartItems();
      contadorCarrinho(); // Atualize o contador de itens no carrinho
    }
  };
}

displayCartItems();

window.addEventListener('storage', function (event) {
  if (event.key === 'cartItems') {
    displayCartItems();
  }
});
