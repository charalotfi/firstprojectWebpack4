import template from "./header.html";
export class Header {
    constructor() {
        console.log(` header constructor`);
        document.getElementById('body').insertAdjacentHTML('afterbegin', template);
    }
    getFirstHeading() {
        return `Webpack Starter page`;
    }
}