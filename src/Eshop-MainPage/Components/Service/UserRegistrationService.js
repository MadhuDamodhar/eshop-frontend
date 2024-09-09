import axios from "axios";

const BASE_URL = "http://localhost:9090";

class ProductService {
  /*----------------------Register User methods---------------*/

  registerUser(user) {
    return axios.post(`${BASE_URL}/user/createUser`, user);
  }
}

export default new ProductService();
