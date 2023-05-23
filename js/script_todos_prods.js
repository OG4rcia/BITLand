window.addEventListener('DOMContentLoaded', function () {
    var products = [
        { name: 'Produto 1', image: 'product1.jpg', price: '$15.00' },
        { name: 'Produto 2', image: 'product2.jpg', price: '$25.00' },
        { name: 'Produto 3', image: 'product3.jpg', price: '$20.00' },
        { name: 'Produto 4', image: 'product4.jpg', price: '$30.00' },
        // Adicione mais produtos aqui
    ];

    var productContainer = document.querySelector('.product-list');
    var productsPerRow = 5;
    var currentRow = document.createElement('li');
    var count = 0;

    products.forEach(function (product) {
        var productItem = document.createElement('a');
        productItem.href = '#';
        productItem.innerHTML = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price-new">${product.price}</p>
            </div>
        `;

        currentRow.appendChild(productItem);
        count++;

        // Verifica se atingiu o número máximo de colunas por linha
        if (count === productsPerRow) {
            productContainer.appendChild(currentRow);
            currentRow = document.createElement('li');
            count = 0;
        }
    });

    // Verifica se há alguma coluna restante não adicionada a uma linha
    if (count > 0) {
        productContainer.appendChild(currentRow);
    }
});