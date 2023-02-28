class Spinner {
  handleClear() {
    ROOT_SPINNER.innerHTML = "";
  }
  render() {
    const html = `
        <div class="spinner__container">
            <img class="spinner__img" src="companents/Spinner/img/spinner.svg"/>
        </div>
    `;
    ROOT_SPINNER.innerHTML = html;
  }
}

const spinnerPage = new Spinner();
