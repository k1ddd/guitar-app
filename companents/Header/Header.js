class Header {
  handlerOpenShoppingPage() {
    shoppingPage.render();
  }
  render(count) {
    const html = `
        <div class="header__container"> 🎸 GUITAR APP 
            <div class="header__counter" onclick="headerPage.handlerOpenShoppingPage()">
                  Кошик 🗑️${count}
            </div>
        </div>`;

    ROOT_HEADER.innerHTML = html;
  }
}

const headerPage = new Header();



