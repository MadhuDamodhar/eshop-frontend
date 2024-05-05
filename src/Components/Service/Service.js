import axios from "axios";
const BASE_URL = "http://localhost:9090/seller/";

class service {
  signUp(seller) {
    return axios.post(BASE_URL + "signup", seller);
  }

  signIn(seller) {
    return axios.post(BASE_URL + "signin", seller);
  }


}
export default new service();
