var produtos = [];

const getProducts = async () => {
    const response = await fetch("https://f332-2804-6ef0-8031-fb01-bc6c-7001-d2e9-5222.ngrok-free.app/produtos", {
        headers: {
            "ngrok-skip-browser-warning": "any"
        }
    });

    const data = await response.json();

    produtos = JSON.parse(JSON.stringify(data));
}

window.onload = getProducts();