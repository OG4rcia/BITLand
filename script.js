var produtos = [];

const getProducts = async () => {
    const response = await fetch("https://localhost:44307/produtos", {
        headers: {
            "ngrok-skip-browser-warning": "any"
        }
    });

    const data = await response.json();
    
    produtos = JSON.parse(JSON.stringify(data));
}

window.onload = getProducts();

$('main ul li a img').src = produtos[0].base64image