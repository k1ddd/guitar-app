class Products {
  constructor() {
    this.classNameActive = "prod__el__btn_active";
    this.labelAdd = "Додати до кошика";
    this.labelRemove = "Видалити із кошика";
  }
  handleSetLocationStorage(elem, id) {
    const { pushProduct, products } = localStorageUtil.putProducts(id);
    if (pushProduct) {
      elem.classList.add(this.classNameActive);
      elem.innerHTML = this.labelRemove;
    } else {
      elem.classList.remove(this.classNameActive);
      elem.innerHTML = this.labelAdd;
    }

    headerPage.render(products.length);
  }
  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";
    CATALOG.forEach(({ id, name, img, price }) => {
      let activeClass = "";
      let activeText = "";

      if (productsStore.indexOf(id) === -1) {
        activeText = this.labelAdd;
      } else {
        activeClass = " " + this.classNameActive;
        activeText = this.labelRemove;
      }
      htmlCatalog += `
            <li class="prod__el">
                <span class="prod__el__name" >${name}</span>
                <img class="prod__el__img" src="${img}"/>
                 <span class="prod__el__price"> ⚡️ ${price.toLocaleString()} UAH </span>
                 <button class="prod__el__btn ${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}')">${activeText}</button>
            </li> `;
    });
    const html = `<ul class="prod__cont">${htmlCatalog}</ul>`;
    ROOT_PRODUCTS.innerHTML = html;
  }
}
const productsPage = new Products();

