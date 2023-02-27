class Shopping {
  handleClear() {
    ROOT_SHOPPING.innerHTML = "";
  }
  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";
    let sumCatalog = 0;

    CATALOG.forEach(({ id, name, img, price }) => {
      if (productsStore.indexOf(id) !== -1) {
        htmlCatalog += `
            <tr>
                <td class="shopping__elem__name">🎸 ${name}</td>
                <td class="shopping__elem__price"> ${price.toLocaleString()} UAH</td>
            </tr>
            `;
        sumCatalog += price;
      }
    });
    const html = `
        <div class="shopping__container">
        <div class="shopping__close" onclick="shoppingPage.handleClear()"></div>
            <table>
                ${htmlCatalog}
                  <tr>
                <td class="shopping__elem__name">👀 Загальна сума:</td>
                <td class="shopping__elem__price"> ${sumCatalog.toLocaleString()} UAH</td>
            </tr>
            </table>
        </div> `;
    ROOT_SHOPPING.innerHTML = html;
  }
}

const shoppingPage = new Shopping();
