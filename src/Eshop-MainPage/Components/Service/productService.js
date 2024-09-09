import axios from "axios";

const BASE_URL = "http://localhost:9090/products";

class ProductService {
  /*----------------------products methods---------------*/

  getAllProductsDetails() {
    return axios.get(`${BASE_URL}/getAllProductsDetails`);
  }
}

export default new ProductService();
