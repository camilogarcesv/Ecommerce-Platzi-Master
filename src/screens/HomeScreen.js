const HomeScreen = {
        render: async() => {
                // const { products } = data;
                const baseLink = 'https://my.api.mockaroo.com/ecommerce_api';
                let myHeaders = new Headers();
                myHeaders.append('X-API-Key', '562af2c0');
                myHeaders.append('Content-Type', 'application/json');

                let requestOptions = {
                    headers: myHeaders,
                };
                requestOptions.method = 'GET';
                const response = await fetch(baseLink, requestOptions);
                if (!response || !response.ok) {
                    return `<div>Error in getting data</div>`;
                }
                const products = await response.json();

                return `
        <ul class="products">
            ${products.map(
                (product) => `
            <li>
                <div class="product">
                    <a href="/#/product/${product.id}">
                        <img src=${product.image} alt=${product.car_model_name}>
                    </a>
                    <div class="product-name">
                        <a href="/#/product/1">
                            ${product.car_model_name}
                        </a>
                    </div>
                    <div class="product-brand">
                        ${product.car_make_name}
                    </div>
                    <div class="product-price">
                        ${product.price}
                    </div>
                </div>
            </li>
            `).join('\n')}
        `;
    },
};
export default HomeScreen;