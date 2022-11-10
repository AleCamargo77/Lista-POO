class Product {
  constructor() {
    this.id = 1;
    this.arrayProducts = [];
  }

  saveProduct() {
    let product = this.readData();

    if (this.validInputs(product)) {
      this.addProducts(product);
    }

    console.log(this.arrayProducts);
  }

  addProducts(product) {
    this.arrayProducts.push(product);
    this.id++;
  }
  removeProduct() {}

  readData() {
    let product = {};
    product.id = this.id;
    product.nameProduct = document.getElementById("nameProduct").value;
    product.priceProduct = document.getElementById("priceProduct").value;
    return product;
  }

  validInputs(product) {
    let msg = "";
    if (product.nameProduct === "") {
      msg += " - Informe o nome do produto \n";
    }

    if (product.priceProduct === "") {
      msg += " - Informe o preço do produto \n";
    }

    if (msg != "") {
      alert(msg);
      return false;
    }

    return true;
  }
}

const product = new Product();
