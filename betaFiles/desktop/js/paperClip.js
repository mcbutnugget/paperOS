customElements.define('paperclip', class extends HTMLElement {
  constructor() {
    super();

    this.iframe = document.createElement('iframe');
    this.iframe.src = this.getAttribute('src');
    this.iframe.width = this.getAttribute('width');
    this.iframe.height = this.getAttribute('height');
    this.iframe.frameBorder = false;
    this.appendChild(this.iframe);

    this.browser = new RBI.Browser();

    this.browser.on('ready', () => {
      this.browser.load(this.iframe.src);
    });

    this.browser.on('data', (data) => {
      this.iframe.contentDocument.body.innerHTML = data;
    });
  }
});
function search(){
    document.getElementById("body4").innerHTML = `<paperlclip src="${document.getElementById("search").value}" width="100%" height="100%"></paperclip>`
}