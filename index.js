function render() {
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
}
spinnerPage.render();
let CATALOG = [];

//  https://api.npoint.io/33db4fb6462584079abd
//server/catalog.json

fetch("https://api.npoint.io/33db4fb6462584079abd")
  .then((result) => result.json())
  .then((body) => {
    CATALOG = body;

    spinnerPage.handleClear();
    render();
  })
  .catch((error) => {
    spinnerPage.handleClear();
    errorPage.render();
  });
