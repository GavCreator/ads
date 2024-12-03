class ads1 extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        // Ads #1 Script Goes Here
      `;
    }
}

class ads2 extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        // Ads #2 Script Goes Here
      `;
    }
}

customElements.define('nav-panel', ads1);
customElements.define('nav-panel', ads2);
