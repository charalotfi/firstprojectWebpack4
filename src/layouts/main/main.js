import template from "./main.html";
export class Main {
    constructor() {
        console.log(` header main`);
        document.getElementById('body').insertAdjacentHTML('afterbegin', template);

    }
}