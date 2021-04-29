import { getProduct } from "../api";
import data from "../data";
import { hideLoading, parseRequestUrl, showLoading } from "../utils";

const ProductScreen = {
  after_render: () => {
    const request = parseRequestUrl();
    document.getElementById("add-button").addEventListener("click", () => {
      document.location.hash = `/cart/${request.id}`;
    });
  },
  render: async () => {
    const request = parseRequestUrl();
    const { products } = data;
    showLoading();
    const product = products[request.id - 1];
    // const product = await getProduct(request.id);

    if (!product) {
      return `<div>Error, product not found</div>`;
    }
    hideLoading();
    return `
    <div class="content">
    <div class="back-to-result">
      <a href="/#/">Back to result </a>
    </div>
    <div class="details">
      <div class="details-image">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="details-action">
          <ul>
          <li>
            <h1>${product.car_make_name} ${product.car_model_name}</h1>
          </li>
          <li>
          <li>
            Price: <strong>${product.price}</strong>
          </li>
          <li>
            Model:
            <div>
              ${product.car_model_year}
            </div>
          </li>
          <li>
            Description:
            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in velit dui. Curabitur ut magna non turpis pellentesque consequat malesuada ac arcu. Curabitur eget pellentesque orci. Sed volutpat risus quis tincidunt venenatis. Fusce eu elit quis erat consectetur mollis in sit amet urna. Quisque finibus id quam eget condimentum. Proin in mi quis lectus faucibus porttitor. Donec sodales nibh odio, fringilla eleifend justo aliquam a. Donec tincidunt fringilla nunc, ut interdum sem lobortis nec. Aenean finibus nibh nulla, nec sollicitudin felis vulputate ac.
            </div>
          </li>
            <li>
                <button id="add-button" class="fw primary">Add to Cart </div>
          </ul>
      </div>
    </div>
  </div>`;
  },
};
export default ProductScreen;
