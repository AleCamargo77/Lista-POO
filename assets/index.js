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
    this.listTable();
    this.removeProduct();
  }

  listTable() {
    let tbody = document.getElementById("tbody");
    tbody.innerText = "";
    for (let i = 0; i < this.arrayProducts.length; i++) {
      let tr = tbody.insertRow();

      let td_id = tr.insertCell();
      let td_product = tr.insertCell();
      let td_price = tr.insertCell();
      let td_actions = tr.insertCell();

      td_id.innerText = this.arrayProducts[i].id;
      td_product.innerText = this.arrayProducts[i].nameProduct;
      td_price.innerText = this.arrayProducts[i].priceProduct;

      td_id.classList.add("center");

      let imgEdit = document.createElement("img");
      imgEdit.src = "./assets/images/editar-alt.svg";

      let imgDelete = document.createElement("img");
      imgDelete.src = "./assets/images/remover.png";
      imgDelete.setAttribute(
        "onclick",
        "product.delete(" + this.arrayProducts[i].id + ")"
      );

      td_actions.appendChild(imgEdit);
      td_actions.appendChild(imgDelete);
    }
  }

  addProducts(product) {
    this.arrayProducts.push(product);
    this.id++;
  }
  removeProduct() {
    document.getElementById("nameProduct").value = "";
    document.getElementById("priceProduct").value = "";
  }

  delete(id) {
    let tbody = document.getElementById("tbody");
    for (let i = 0; i < this.arrayProducts.length; i++) {
      if (this.arrayProducts[i].id === id) {
        this.arrayProducts.splice(i, 1);
        tbody.deleteRow(i);
      }
    }
  }

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
