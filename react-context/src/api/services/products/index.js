import { HttpClient } from "../../HttpClient";

class ProductService extends HttpClient {
  constructor() {
    super("https://624b18f944505084bc4c1fed.mockapi.io/");
  }

  //   getAllProducts() {
  //     return this.get("products");
  //   }
  getAllUsers() {
    return this.get("users");
  }
  //   getProduct(id) {
  //     return this.getProductById("products", id);
  //   }
  //   createProduct(body) {
  //     return this.post("products", body);
  //   }
  //   deleteProduct(id) {
  //     return this.delete("products", id);
  //   }
}

export const productService = new ProductService();
