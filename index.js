function render() {
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
}
let CATALOG = [];

//  https://api.npoint.io/33db4fb6462584079abd

fetch("server/catalog.json")
  .then((result) => result.json())
  .then((body) => {
    CATALOG = body;
    render();
  })
  .catch((error) => {
    console.log(error);
  });
