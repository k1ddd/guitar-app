class Products {
  render() {
    let htmlCatalog = "";
    CATALOG.forEach(({ id, name, img, price }) => {
      htmlCatalog += `
            <li class="prod__el">
                <span class="prod__el__name" >${name}</span>
                <img class="prod__el__img" src="${img}"/>
                 <span class="prod__el__price"> ⚡️ ${price.toLocaleString()} UAH </span>
                 <button class="prod__el__btn">Додати до корзини</button>
            </li> `;
    });
    const html = `<ul class="prod__cont">${htmlCatalog}</ul>`;
    ROOT_PRODUCTS.innerHTML = html;
  }
}
const productsPage = new Products();
productsPage.render();
