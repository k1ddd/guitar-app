class Error {
  render() {
    const html = `
        <div class="error__container">
            <div class="error__message">
            <h3>No access</h3>
            <p>Please try later</p>
        </div>     
        </div>
         `;
    ROOT_ERROR.innerHTML = html;
  }
}

const errorPage = new Error();
